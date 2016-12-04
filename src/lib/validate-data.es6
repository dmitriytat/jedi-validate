import { getValueByName } from './get-data.es6';

/**
 * Validate field
 * @param {object} rules - object with rules for validation
 * @param {object} methods - validation methods
 * @param {string|FileList|Array} value - value of input
 * @param {string} name - name on input
 * @param {object} errorMessages - object with error messages
 * @returns {Array.<string>} - array of field errors
 */
export function validateField(rules, methods, value, name, errorMessages) {
    const isEmpty = !methods.required.func(value);

    if (isEmpty && rules.required) {
        return [errorMessages[name].required];
    }

    if (isEmpty) {
        return [];
    }

    return Object.keys(rules).reduce((errors, method) => {
        const params = rules[method];
        if (!params) return errors;

        if (methods[method]) {
            const valid = methods[method].func(value, params);

            if (!valid) {
                errors.push(errorMessages[name][method]);
            }
        } else {
            errors.push(`Method "${method}" not found`);
        }

        return errors;
    }, []);
}

/**
 * Validate data object
 * @param {object} rules - object with rules for validation
 * @param {object} methods - validation methods
 * @param {object} data - data object
 * @param {object} errorMessages - object with error messages
 * @returns {object.<string, Array.<string>>} - object of fields error arrays
 */
export function validateData(rules, methods, data, errorMessages) {
    return Object.keys(rules).reduce((obj, name) => {
        const value = getValueByName(name, data);
        const errors = validateField(rules[name], methods, value, name, errorMessages);
        return {
            ...obj,
            [name]: errors.length ? errors : undefined,
        };
    }, {});
}
