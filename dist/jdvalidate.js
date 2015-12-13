(function ($) {
    var methods = {};

    $.fn.jdvalidate = function (options) {
        var defaultOptions = {
            ajax: {
                dataType: 'json'
            },
            sendType: 'serialize',
            classes: {
                error: "error",
                baseError: "base-error",
                valid: "valid"
            },
            clean: true,
            rules: {},
            messages: {},
            baseError: null
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

            if (self.options.sendType === "formData") {
                ajaxOptions.processData = false;
                ajaxOptions.data = new FormData(self.form.get(0));
            } else if (self.options.sendType === "json") {
                var data = {};

                $.each(self.inputs, function (name, element) {
                    data[name] = element.val();
                });

                ajaxOptions.data = JSON.stringify(data);
            } else if (self.options.sendType === "serialize") {
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

                self.baseError.text(error);
                console.error(error);
            });
        });

        self.markError = function (name, errors) {
            if (!self.labels[name]) {
                self.labels[name] = $('<label></label>')
                    .attr('for', name)
                    .addClass(self.options.classes.error);

                self.inputs[name].after(self.labels[name]);
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

            if (self.labels[name]) {
                self.labels[name].hide();
            }
        };

        self.checkInput = function (name, rules) {
            var isValid = true;

            var errors = [];

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
/**
 * Standart validation methods
 */

(function ($) {
    $.jdvalidate.addMethod("required", function (value, element) {
        return (value.trim() != '' && !element.is('[type="checkbox"]')) || (element.is('[type="checkbox"]') && element.is(':checked'));
    }, "The field is required");

    $.jdvalidate.addMethod("regexp", function (value, element, regexp) {
        return regexp.test(value);
    }, "The field value is invalid");

    $.jdvalidate.addMethod("email", function (value) {
        return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value);
    }, "The e-mail is invalid");

    $.jdvalidate.addMethod('filesize', function (value, element, size) {
        return !element.get(0).files[0] || element.get(0).files[0].size <= size;
    }, "The file is too large");

    $.jdvalidate.addMethod('extension', function (value, element, extensions) {
        return !element.get(0).files[0] || extensions.indexOf(element.get(0).files[0].name.split('.').pop()) > -1;
    }, "The file extension is invalid");
})(jQuery);