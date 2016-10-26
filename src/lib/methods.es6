import { translate } from '../i18n/jedi-validate-i18n.es6';

export default {
    required: {
        func: value => value && value.trim() !== '',
        message: translate('This field is required'),
    },
    regexp: {
        func: (value, element, regexp) => regexp.test(value),
        message: translate('Please, provide correct value'),
    },
    email: {
        func: value => /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value),
        message: translate('This email is incorrect'),
    },
    filesize: {
        func: (value, element, size) => [...element.files].reduce((r, file) => file.size < size && r, true), // eslint-disable-line max-len
        message: translate('This file is too large'),
    },
    extension: {
        func: (value, element, extensions) => [...element.files].reduce((r, file) => extensions.indexOf(file.name.split('.').pop()) !== -1 && r, true), // eslint-disable-line max-len
        message: translate('This extension is not supported'),
    },
    tel: {
        func: value => /^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/.test(value),
        message: translate('This phone number is incorrect'),
    },
    url: {
        func: value => /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.test(value), // eslint-disable-line max-len
        message: translate('Wrong url'),
    },
};
