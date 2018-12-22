// @flow

import { getValueByName } from './get-data';
import type { Data, MethodMap, RulesOptions } from '../types';

type Param = Array<Param> | number | string | boolean;

/**
 * Check rule for dependencies
 * @param {*} params - validation params
 * @param {object} data - form data
 * @returns {*} - validation params or null if rule is not checkable
 */
export function isCheckable(params: Param, data: Data): Param | null {
    if (!params) {
        return null;
    }

    let checkable = true;
    let param = params;

    if (Array.isArray(params)) {
        let dependencies;

        [param, ...dependencies] = params;

        if (!param) {
            return null;
        }

        try {
            checkable = dependencies.reduce(
                (required, dependency) =>
                    required && (typeof dependency === 'function' ? dependency(data) : !!data[String(dependency)]),
                checkable,
            );
        } catch (error) {
            if (process.env.NODE_ENV === 'development') {
                console.warn(`Dependency function error: ${error.toString()}`);
            }
        }
    }

    return checkable ? param : null;
}

type FieldErrorMessages = {
    [string]: string,
};

type FormErrorMessages = {
    [string]: FieldErrorMessages,
};

/**
 * Validate field
 * @param {object} rules - object with rules for validation
 * @param {object} methods - validation methods
 * @param {string|FileList|Array} value - input value
 * @param {string} name - input name
 * @param {object} formErrorMessages - object with error messages
 * @param {object} data - form data
 * @param {function} translate - translation function
 * @returns {Array.<string>} - array of field errors
 */
export function validateField(
    rules: RulesOptions,
    methods: MethodMap,
    value: any,
    name: string,
    formErrorMessages: FormErrorMessages,
    data: Data,
    translate: string => string,
) {
    const isEmpty = !methods.required.func(value);

    const isRequired = isCheckable(rules.required, data);

    if (isEmpty && isRequired) {
        return [translate(formErrorMessages[name].required)];
    }

    if (isEmpty) {
        return [];
    }

    return Object.keys(rules).reduce((errors, method) => {
        const params = isCheckable(rules[method], data);

        if (params === null) {
            return errors;
        }

        if (methods[method]) {
            const valid = methods[method].func(value, params);

            if (!valid) {
                errors.push(translate(formErrorMessages[name][method]));
            }
        } else {
            errors.push(translate('Method {method} not found').replace('{method}', method));
        }

        return errors;
    }, []);
}

/**
 * Validate data object
 * @param {object} rules - object with rules for validation
 * @param {object} methods - validation methods
 * @param {object} data - data object
 * @param {object} formErrorMessages - object with error messages
 * @param {function} translate - translation function
 * @returns {object.<string, Array.<string>>} - object of fields error arrays
 */
export function validateData(
    rules: RulesOptions,
    methods: MethodMap,
    data: Data,
    formErrorMessages: FormErrorMessages,
    translate: string => string,
) {
    return Object.keys(rules).reduce((obj, name) => {
        const value = getValueByName(name, data);
        const errors = validateField(rules[name], methods, value, name, formErrorMessages, data, translate);
        return {
            ...obj,
            [name]: errors.length ? errors : undefined,
        };
    }, {});
}
