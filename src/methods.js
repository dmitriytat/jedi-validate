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