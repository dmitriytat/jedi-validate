(function ($) {
    var methods = {};

    $.fn.jdvalidate = function (options) {
        var defaultOptions = {
            ajax: {
                dataType: 'json'
            },
            sendType: 'serialize',
            classes: {
                error: 'error',
                baseError: 'base-error',
                valid: 'valid'
            },
            clean: true,
            rules: {},
            messages: {},
            baseError: null,
            parent: {}
        };

        var self = {};

        self.options = $.extend(defaultOptions, options);

        self.form = this;

        self.baseError = self.options.baseError ? self.options.baseError : $('<div></div>')
            .addClass(self.options.classes.baseError)
            .addClass(self.options.classes.error)
            .hide();

        if (!self.options.baseError) {
            self.form.prepend(self.baseError);
        }

        self.form.attr('novalidate', 'true');

        self.inputs = {};
        self.labels = {};
        self.rules = {};

        self.form.find('[name]')
            .each(function () {
                var input = $(this);
                var name = input.attr('name');

                self.inputs[name] = input;

                self.rules[name] = self.options.rules[name] || {};

                self.rules[name].required = input.is('[required]') || input.hasClass('required');
                self.rules[name].email = input.is('[type="email"]') || input.hasClass('email');
            })
            .on('change.jdvalidate', function () {
                var name = $(this).attr('name');

                self.checkInput(name, self.rules[name]);
            });

        self.form.on('submit.jdvalidate', function (event) {
            if (!self.checkForm()) {
                event.preventDefault();
                return false;
            }

            if (!self.options.ajax) {
                return false;
            } else {
                event.preventDefault();
            }

            var ajaxOptions = {};

            ajaxOptions.url = self.form.attr('action');
            ajaxOptions.method = self.form.attr('method');

            if (self.options.sendType === 'formData') {
                ajaxOptions.processData = false;
                ajaxOptions.data = new FormData(self.form.get(0));
            } else if (self.options.sendType === 'json') {
                var data = {};

                $.each(self.inputs, function (name, element) {
                    data[name] = (element.is('[type="checkbox"]') && element.is(':checked') || !element.is('[type="checkbox"]')) ? element.val() : '';
                });

                ajaxOptions.data = JSON.stringify(data);
            } else if (self.options.sendType === 'serialize') {
                ajaxOptions.data = self.form.serialize();
            }

            ajaxOptions = $.extend(ajaxOptions, self.options.ajax);

            $.each(self.labels, self.markValid);

            $.ajax(ajaxOptions).done(function (response) {
                if (response.validationErrors) {
                    $.each(self.inputs, function (name) {
                        if (self.labels[name] && !response.validationErrors[name]) {
                            self.labels[name].hide();
                        }
                    });

                    if (response.validationErrors.base) {
                        self.baseError.text(response.validationErrors.base.join(', ')).show();

                        delete response.validationErrors.base;
                    } else {
                        self.baseError.hide();
                    }

                    $.each(response.validationErrors, self.markError);
                } else if (response.redirect) {
                    window.location.replace(response.redirect);
                } else {
                    if (self.options.clean) {
                        self.form.get(0).reset();
                    }
                }
            }).fail(function (response) {
                var error = ajaxOptions.method + ' ' + ajaxOptions.url + ' ' + response.status + ' (' + response.statusText + ')';

                self.baseError.text(error).show();
                console.error(error);
            });
        });

        self.markError = function (name, errors) {
            if (!self.labels[name]) {
                self.labels[name] = $('<label></label>')
                    .attr('for', name)
                    .addClass(self.options.classes.error);

                if (!self.options.parent) {
                    self.inputs[name].after(self.labels[name]);
                } else {
                    self.inputs[name ].closest(self.options.parent.selector).append(self.labels[name]);
                }
            }

            if (self.options.parent) {
				self.inputs[name ].closest(self.options.parent.selector)
					.addClass(self.options.parent.classes.error)
					.removeClass(self.options.parent.classes.valid);
            }

			self.inputs[name]
                .addClass(self.options.classes.error)
                .removeClass(self.options.classes.valid);

            self.labels[name].text(errors.join(', ')).show();
        };

        self.markValid = function (name) {
            self.inputs[name]
                .removeClass(self.options.classes.error)
                .addClass(self.options.classes.valid);

			if (self.options.parent) {
				self.inputs[name ].closest(self.options.parent.selector)
					.addClass(self.options.parent.classes.valid)
					.removeClass(self.options.parent.classes.error);
			}

            if (self.labels[name]) {
                self.labels[name].hide();
            }
        };

        self.checkInput = function (name, rules) {
            var isValid = true;

            var errors = [];

            var isEmpty = !methods['required'].func(self.inputs[name].val(), self.inputs[name]);

            if (isEmpty && rules['required']){
				var message = self.options.messages[name] ? self.options.messages[name]['required'] ? self.options.messages[name]['required'] : methods['required'].message : methods['required'].message;
				errors.push(message);
            } else if (!isEmpty) {
                $.each(rules, function (method, params) {
                    if (params) {
                        if (methods[method]) {
                            var valid = methods[method].func(self.inputs[name].val(), self.inputs[name], params);

                            if (!valid) {
                                var message = self.options.messages[name] ? self.options.messages[name][method] ? self.options.messages[name][method] : methods[method].message : methods[method].message;
                                errors.push(message);
                            }
                        } else {
                            console.error('Method "' + method + '" not found');
                            errors.push('Method "' + method + '" not found');
                        }
                    }
                });
            }

            if (errors.length) {
                self.markError(name, errors);

                isValid = false;
            } else {
                self.markValid(name);
            }

            return isValid;
        };

        self.checkForm = function () {
            var isValid = true;

            $.each(self.rules, function (name, rules) {
                isValid = self.checkInput(name, rules) && isValid;
            });

			self.baseError.text('').hide();

            return isValid;
        };

        return self.form;
    };

    $.jdvalidate = {};

    $.jdvalidate.addMethod = function (rule, func, message) {
        methods[rule] = {
            func: func,
            message: message
        };
    };
})(jQuery);