// @flow

import type { Options } from './types';

const options: Options = {
    ajax: {
        url: './',
        enctype: 'application/x-www-form-urlencoded',
        sendType: 'serialize', // 'serialize', 'formData', 'json'
        method: 'GET',
    },
    rules: {},
    messages: {},
    containers: {
        parent: 'form-group',
        message: 'help-block',
        baseMessage: 'base-error',
    },
    states: {
        error: 'error',
        valid: 'valid',
        pristine: 'pristine',
        dirty: 'dirty',
    },
    formStatePrefix: 'jedi-',
    callbacks: {
        success() {},
        error() {},
    },
    clean: true,
    redirect: true,
    language: 'en',
    translations: {},
};

export default options;
