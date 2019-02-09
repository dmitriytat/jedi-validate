export default {
    ajax: {
        url: null,
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
        // eslint-disable-next-line no-unused-vars
        success({ event, response }) {},
        // eslint-disable-next-line no-unused-vars
        error({ errors }) {},
    },
    clean: true,
    redirect: true,
    language: 'en',
    translations: {},
};
