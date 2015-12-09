(function ($) {
	var methods = {};

	$.fn.jdvalidate = function (options) {
		var defaultOptions = {
			ajax: {
				dataType: 'json'
			},
			classes: {
				error: "error",
				baseError: "base-error",
				valid: "valid"
			},
			clean: true,
			rules: {}
		};

		options = $.extend(defaultOptions, options);

		return this.each(function () {
			form = $(this);

			var clientError = false;

			var ajaxOptions = {};
			var baseErrorLabel = $('<div></div>')
				.addClass(options.classes.baseError)
				.addClass(options.classes.error)
				.hide();

			form.prepend(baseErrorLabel);
			form.attr('novalidate', 'true');

			var errorLabels = {};
			var inputs = {};

			form.find('[name]').each(function () {
				var input = $(this);

				inputs[ input.attr('name') ] = input;
			});

			var markError = function (name, errors) {
				if (!errorLabels[ name ]) {
					errorLabels[ name ] = $('<label></label>')
						.attr('for', name)
						.addClass(options.classes.error);

					inputs[ name ].after(errorLabels[ name ]);
				}

				inputs[ name ].addClass(options.classes.error)
					.removeClass(options.classes.valid);
				errorLabels[ name ].text(errors.join(', ')).show();
			};

			var hideError = function (name) {
				if (errorLabels[ name ]) {
					errorLabels[ name ].hide();
					inputs[ name ]
						.removeClass(options.classes.error)
						.addClass(options.classes.valid);
				}
			};

			form.on('submit', function (event) {
				event.preventDefault();

				clientError = false;

				$.each(options.rules, function (name, rules) {
					var errors = [];

					$.each(rules, function (method, params) {
						var valid = methods[ method ].func(inputs[ name ].val(), inputs[ name ], params);

						if (!valid) {
							errors.push(methods[ method ].message);
						}
					});

					if (errors.length) {
						markError(name, errors);

						clientError = true;
					} else {
						hideError(name);
					}
				});

				if (clientError) {
					return;
				}

				ajaxOptions.url = form.attr('action');
				ajaxOptions.method = form.attr('method');
				ajaxOptions.data = form.serialize();

				ajaxOptions = $.extend(ajaxOptions, options.ajax);

				$.each(errorLabels, hideError);

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
	}
})(jQuery);