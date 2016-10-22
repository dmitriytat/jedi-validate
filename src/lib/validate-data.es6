export function validateData(rules, methods, data, inputs) {
    return Object.keys(rules).reduce((obj, name) => {
        const errors = validateField(rules, methods, data[name], inputs[name]);
        return errors.length ? Object.assign({}, obj, { [name]: errors }) : obj;
    }, {});
}

export function validateField(rules, methods, data, input) {
    const { name } = input;
    const isEmpty = !methods.required.func(data, input);

    if (isEmpty && rules.required) {
        return [this.getErrorMessage(name, 'required')]; // todo think about it
    }

    if (isEmpty) {
        return [];
    }

    return Object.keys(rules).reduce((errors, method) => {
        const params = rules[method];
        if (!params) return errors;

        if (methods[method]) {
            const valid = methods[method].func(data, input, params);

            if (!valid) {
                errors.push(this.getErrorMessage(name, method)); // todo think about it   
            }
        } else {
            errors.push(`Method "${method}" not found`);
        }

        return errors;
    }, []);
}
