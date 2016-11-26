import deepmerge from 'deepmerge';

export function createObject(path, value) {
    const segment = path[0];

    if (segment.length === 0) {
        return value;
    } else if (segment === '[]') {
        return [createObject(path.slice(1), value)];
    }

    return { [segment]: createObject(path.slice(1), value) };
}

const NAME = /(\[(\w*)\]|\w*)/gi;
export function convertNameToPath(name) {
    const path = [];

    let matches = NAME.exec(name);
    while (matches !== null) {
        if (matches.index === NAME.lastIndex) {
            NAME.lastIndex += 1;
        }

        path.push(matches[2] || matches[1]);

        matches = NAME.exec(name);
    }

    return path;
}

export function getValueByPath(path, data) {
    return path.reduce((value, segment) => (segment && value ? value[segment] : value), data || '');
}

export function getValueByName(name, data) {
    const path = convertNameToPath(name);
    return getValueByPath(path, data);
}

export function getRadioGroupValue(inputs) {
    return [...inputs].map(radio => getInputValue(radio)).filter(Boolean)[0];
}

export function getInputValue(input) {
    if (!input) return undefined;

    const { type } = input;

    if (Array.isArray(input)) {
        return getRadioGroupValue(input);
    }

    switch (type) {
    case 'select-one':
        return input.options.length ? input.options[input.selectedIndex].value : '';
    case 'select-multiple':
        return input.options.filter(option => option.selected).map(option => option.value);
    case 'checkbox':
    case 'radio':
        return input.checked ? input.value : '';
    case 'file':
        return input.files;
    default:
        return input.value;
    }
}

export function getInputData(input) {
    const value = getInputValue(input);
    const path = convertNameToPath(input.name);

    return createObject(path, value);
}

export function getData(inputs) {
    return Object.keys(inputs).reduce(
        (data, name) => deepmerge(data, getInputData(inputs[name])),
        {}
    );
}

export function getQueryPart(name, data) {
    if (Array.isArray(data)) {
        return data.reduce((part, index) => part + getQueryPart(`${name}[${index}]`, data[index]), '');
    } else if (typeof data === 'object') {
        return Object.keys(data).reduce((part, index) => part + getQueryPart(`${name}[${index}]`, data[index]), '');
    }

    return `${name}=${encodeURIComponent(data)}&`;
}

export function convertData(data, type) { // todo think about inputs
    let convertedData;

    switch (type) {
    case 'serialize':
        convertedData = Object.keys(data)
                .reduce((query, name) => `${query}${getQueryPart(name, data[name])}`, '');
        return convertedData.length ? convertedData.slice(0, -1) : '';
    case 'formData': // todo rework
        return Object.keys(data).reduce((formData, name) => {
            if (data[name] instanceof FileList) {
                if (data[name].length > 1) {
                    for (let i = 0; i < data[name].length; i += 1) {
                        formData.append(`${name}[${i}]`, data[name][i]);
                    }
                } else if (data[name].length === 1) {
                    formData.append(name, data[name][0]);
                }
            } else {
                if (typeof data[name] === 'object') {
                    Object.keys(data[name]).forEach(key => formData.append(`${name}[${key}]`, data[name][key]));
                } else {
                    formData.append(name, data[name]);
                }
            }

            return formData;
        }, new FormData());
    case 'json':
    default:
        return JSON.stringify(data);
    }
}
