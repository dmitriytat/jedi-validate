(function ($) {
	var methods = {};

	$.fn.jdvalidate = function (options) {
		var defaultOptions = {
			ajax: { // can be false
				dataType: 'json'
			},
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

		options = $.extend(defaultOptions, options);

		return this.each(function () {
			form = $(this);

			var ajaxOptions = {};
			var baseErrorLabel = options.baseError ? options.baseError : $('<div></div>')
				.addClass(options.classes.baseError)
				.addClass(options.classes.error)
				.hide();

			if (!options.baseError) {
				form.prepend(baseErrorLabel);
			}

			form.attr('novalidate', 'true');

			var errorLabels = {};
			var inputs = {};

			form.find('[name]')
				.each(function () {
					var input = $(this);
					var name = input.attr('name');

					inputs[ name ] = input;

					options.rules[ name ] = options.rules[ name ] || {};

					options.rules[ name ].required = input.is('[required]') || input.hasClass('required');
					options.rules[ name ].email = input.is('[type="email"]') || input.hasClass('email');
				})
				.on('change', function () {
					var name = $(this).attr('name');

					checkInput(name, options.rules[ name ]);
				});

			var markError = function (name, errors) {
				if (!errorLabels[ name ]) {
					errorLabels[ name ] = $('<label></label>')
						.attr('for', name)
						.addClass(options.classes.error);

					inputs[ name ].after(errorLabels[ name ]);
				}

				inputs[ name ]
					.addClass(options.classes.error)
					.removeClass(options.classes.valid);

				errorLabels[ name ].text(errors.join(', ')).show();
			};

			var markValid = function (name) {
				inputs[ name ]
					.removeClass(options.classes.error)
					.addClass(options.classes.valid);

				if (errorLabels[ name ]) {
					errorLabels[ name ].hide();
				}
			};

			var checkInput = function (name, rules) {
				var isValid = true;

				var errors = [];

				$.each(rules, function (method, params) {
					if (params) {
						var valid = methods[ method ].func(inputs[ name ].val(), inputs[ name ], params);

						if (!valid) {
							var message = options.messages[ name ] ? options.messages[ name ][ method ] ? options.messages[ name ][ method ] : methods[ method ].message : methods[ method ].message;
							errors.push(message);
						}
					}
				});

				if (errors.length) {
					markError(name, errors);

					isValid = false;
				} else {
					markValid(name);
				}

				return isValid;
			};

			var checkForm = function () {
				var isValid = true;

				$.each(options.rules, function (name, rules) {
					isValid = checkInput(name, rules) && isValid;
				});

				return isValid;
			};

			form.on('submit', function (event) {
				if (!checkForm()) {
					event.preventDefault();

					return;
				}

				if (!options.ajax) {
					return;
				} else {
					event.preventDefault();
				}

				ajaxOptions.url = form.attr('action');
				ajaxOptions.method = form.attr('method');
				ajaxOptions.data = form.serialize();

				ajaxOptions = $.extend(ajaxOptions, options.ajax);

				$.each(errorLabels, markValid);

				$.ajax(ajaxOptions)
					.done(function (response) {
						if (response.validationErrors) {
							$.each(inputs, function (name) {
								if (errorLabels[ name ] && !response.validationErrors[ name ]) {
									errorLabels[ name ].hide();
								}
							});

							if (response.validationErrors.base) {
								baseErrorLabel.text(response.validationErrors.base.join(', ')).show();

								delete response.validationErrors.base;
							} else {
								baseErrorLabel.hide();
							}

							$.each(response.validationErrors, markError);
						} else if (response.redirect) {
							window.location.replace(response.redirect);
						} else {
							if (options.clean) {
								form.get(0).reset();
							}
						}
					}).fail(function (response) {
						console.log(response);
					});
			});
		});
	};

	$.jdvalidate = {};

	$.jdvalidate.addMethod = function (rule, func, message) {
		methods[ rule ] = {
			func: func,
			message: message
		};
	};

	/**
	 * Standart validation methods
	 */

	$.jdvalidate.addMethod("required", function (value) {
		return value.trim() != '';
	}, "Field is required");

	$.jdvalidate.addMethod("regex", function (value, element, regexp) {
		var re = new RegExp(regexp);
		return re.test(value);
	}, "Please check your input.");

	$.jdvalidate.addMethod("email", function (value) {
		return /[a-z]+@[a-z]+\.[a-z]+/.test(value);
	}, "Please check your e-mail.");

	$.jdvalidate.addMethod('filesize', function (value, element, size) {
		return !element.get(0).files[ 0 ] || element.get(0).files[ 0 ].size <= size;
	}, "File too big");

	$.jdvalidate.addMethod('extension', function (value, element, extensions) {
		return !element.get(0).files[ 0 ] || extensions.indexOf(element.get(0).files[ 0 ].name.split('.').pop()) > -1;
	}, "Extension is wrong");
})(jQuery);