// @flow

import type { MessagesOptions, MethodMap, RulesOptions } from '../types';

/**
 * Mark field as invalid
 * @private
 * @param {Element} field
 * @param {Element} message
 * @param {object} classes
 * @param {string} classes.error
 * @param {string} classes.valid
 * @param {Array.<string>} errors
 */
export function markError(
    field: HTMLElement,
    message: HTMLElement,
    { error, valid }: ContainerClasses,
    errors: Array<string>,
) {
    field.classList.add(error);
    field.classList.remove(valid);

    message.innerHTML = errors.join(', '); // eslint-disable-line no-param-reassign
}

type ContainerClasses = {
    error: string,
    valid: string,
};

/**
 * Mark field as valid
 * @private
 * @param {Element} field
 * @param {Element} message
 * @param {object} classes
 * @param {string} classes.error
 * @param {string} classes.valid
 */
export function markValid(field: HTMLElement, message: HTMLElement, { error, valid }: ContainerClasses) {
    field.classList.add(valid);
    field.classList.remove(error);

    message.innerHTML = ''; // eslint-disable-line no-param-reassign
}

/**
 * Mark field
 * @private
 * @param {Element} field
 * @param {Element} message
 * @param {{error:string, valid:string}} states
 * @param {Array.<string>} errors
 */
export function markField(field: HTMLElement, message: HTMLElement, states: ContainerClasses, errors: Array<string>) {
    if (errors && errors.length) {
        markError(field, message, states, errors);
    } else {
        markValid(field, message, states);
    }
}

/**
 * Init error messages
 * @private
 * @param {object} rules
 * @param {object} messages
 * @param {object} methods
 * @returns {Object.<string, Object.<string, string>>}
 */
export function initErrorMessages(rules: RulesOptions, messages: MessagesOptions, methods: MethodMap) {
    return Object.keys(rules).reduce(
        (names, name) => ({
            ...names,
            [name]: Object.keys(rules[name]).reduce(
                (ruleNames, method) => ({
                    ...ruleNames,
                    [method]:
                        (messages[name] && messages[name][method]) ||
                        (methods[method] && methods[method].message) ||
                        '',
                }),
                {},
            ),
        }),
        {},
    );
}
