// @flow

import type { FormOptions, RulesOptions } from '../types';

/**
 * Get ajax options from form
 * @param {HTMLFormElement} form - form element
 * @returns {{ajax: {url: string, method: string, enctype: string, sendType: *}}} - options
 */
export function getFormOptions(form: HTMLFormElement): FormOptions {
    const enctype = form.getAttribute('enctype') || undefined;

    return {
        ajax: {
            enctype,
            url: form.getAttribute('action') || undefined,
            method: form.getAttribute('method') || undefined,
            sendType: enctype === 'multipart/form-data' ? 'formData' : undefined,
        },
    };
}

/**
 * Get validatation options from input attribute of className
 * @param {HTMLInputElement|HTMLSelectElement} input - input for validation
 * @returns {object} - rules
 */
export function getInputRules(input: HTMLInputElement | HTMLSelectElement): RulesOptions {
    const defaultRules = ['required', 'email', 'tel', 'url'];

    const rules: RulesOptions = defaultRules.reduce((inputRules, rule) => {
        const newRules = {};
        const newRule = input.hasAttribute(rule) || input.type === rule || input.classList.contains(rule);

        if (newRule) {
            newRules[rule] = newRule;
        }

        return {
            ...inputRules,
            ...newRules,
        };
    }, {});

    if (input.hasAttribute('step')) {
        const step = parseInt(input.getAttribute('step'), 10);

        if (typeof step === 'number') {
            rules.step = step;
        }
    }

    if (input.hasAttribute('pattern')) {
        const pattern = input.getAttribute('pattern');

        if (pattern) {
            rules.regexp = new RegExp(pattern);
        }
    }

    let convert;

    if (input.type === 'date') {
        convert = value => new Date(value);
    } else {
        convert = value => parseInt(value, 10) || 0;
    }

    if (input.hasAttribute('min')) {
        const min = input.getAttribute('min');

        if (min) {
            rules.min = convert(min);
        }
    }

    if (input.hasAttribute('max')) {
        const max = input.getAttribute('max');

        if (max) {
            rules.max = convert(max);
        }
    }

    return rules;
}
