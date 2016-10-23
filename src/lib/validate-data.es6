import { getValueByName } from './get-data.es6';

export function validateField(rules, methods, value, input, getErrorMessage) { // fixme getErrorMessage is bad
    if (!input) return [];

    const { name } = input;
    const isEmpty = !methods.required.func(value, input);

    if (isEmpty && rules.required) {
        return [getErrorMessage(name, 'required')]; // todo think about it
    }

    if (isEmpty) {
        return [];
    }

    return Object.keys(rules).reduce((errors, method) => {
        const params = rules[method];
        if (!params) return errors;

        if (methods[method]) {
            const valid = methods[method].func(value, input, params);

            if (!valid) {
                errors.push(getErrorMessage(name, method)); // todo think about it
            }
        } else {
            errors.push(`Method "${method}" not found`);
        }

        return errors;
    }, []);
}

export function validateData(rules, methods, data, inputs, getErrorMessage) { // fixme getErrorMessage is bad
    return Object.keys(rules).reduce((obj, name) => {
        const value = getValueByName(name, data);
        const errors = validateField(rules[name], methods, value, inputs[name], getErrorMessage);
        return {
            ...obj,
            [name]: errors.length ? errors : undefined,
        };
    }, {});
}
