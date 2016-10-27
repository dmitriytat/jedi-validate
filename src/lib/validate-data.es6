import { getValueByName } from './get-data.es6';

export function validateField(rules, methods, value, input, errorMessages) {
    if (!input) return [];

    const { name } = input;
    const isEmpty = !methods.required.func(value, input);

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
            const valid = methods[method].func(value, input, params);

            if (!valid) {
                errors.push(errorMessages[name][method]);
            }
        } else {
            errors.push(`Method "${method}" not found`);
        }

        return errors;
    }, []);
}

export function validateData(rules, methods, data, inputs, errorMessages) {
    return Object.keys(rules).reduce((obj, name) => {
        const value = getValueByName(name, data);
        const errors = validateField(rules[name], methods, value, inputs[name], errorMessages);
        return {
            ...obj,
            [name]: errors.length ? errors : undefined,
        };
    }, {});
}
