import deepmerge from 'deepmerge';

/**
 * Create object by path and value
 * @param {Array} path - path array
 * @param {string|FileList} value - value on input
 * @returns {object} - data object
 */
export function createObject(path, value) {
    const segment = path[0];

    if (segment.length === 0) {
        return value;
    } else if (segment === '[]') {
        return [createObject(path.slice(1), value)];
    }

    return { [segment]: createObject(path.slice(1), value) };
}

/**
 * Name regexp for conversion to path
 * @type {RegExp}
 */
const NAME = /(\[(\w*)\]|\w*)/gi;

/**
 * Convart name of input to path array
 * @param {string} name - name of input
 * @returns {Array} - path to value in data object
 */
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

/**
 * Get value from data object by path
 * @param {Array} path - value path
 * @param {object} data - data object
 */
export function getValueByPath(path, data) {
    return path.reduce((value, segment) => (segment && value ? value[segment] : value), data || '');
}

/**
 * Get value from data object by name
 * @param {string} name - input name
 * @param {object} data - data object
 */
export function getValueByName(name, data) {
    const path = convertNameToPath(name);
    return getValueByPath(path, data);
}

/**
 * Get value from radio group
 * @param {Array} inputs - array of radio inputs
 * @returns {string} value of checked input
 */
export function getRadioGroupValue(inputs) {
    return [...inputs].map(radio => getInputValue(radio)).filter(Boolean)[0];
}

/**
 * Get value form input
 * @param {HTMLInputElement|HTMLSelectElement|Array} input - input element or array of HTMLInputElements
 * @returns {string|FileList|Array} - value of input, or array of value if input is select
 */
export function getInputValue(input) {
    if (!input) return '';

    const { type } = input;

    if (Array.isArray(input)) {
        return getRadioGroupValue(input);
    }

    switch (type) {
    case 'select-one':
        return input.options.length ? input.options[input.selectedIndex].value : '';
    case 'select-multiple':
        return [...input.options].filter(option => option.selected).map(option => option.value);
    case 'checkbox':
    case 'radio':
        return input.checked ? input.value : '';
    case 'file':
        return input.files;
    default:
        return input.value;
    }
}

/**
 * Get object which key is name of input and value is value of input
 * @param {HTMLInputElement|array} input - input element or Array of HTMLInputElements
 * @returns {object} - data
 */
export function getInputData(input) {
    let name = input.name;
    if (!name && Array.isArray(input) && input[0]) {
        name = input[0].name;
    }

    const value = getInputValue(input);
    const path = convertNameToPath(name);

    return createObject(path, value);
}

/**
 * Get data object with values from inputs object
 * @param {object} inputs - inputs object
 * @returns {object} - data object
 */
export function getData(inputs) {
    return Object.keys(inputs).reduce(
        (data, name) => deepmerge(data, getInputData(inputs[name])),
        {}
    );
}

/**
 * Create part url for serialize method
 * @param {string} name
 * @param {object|Array|string} data
 * @returns {string} - part of url
 */
export function getQueryPart(name, data) {
    if (Array.isArray(data)) {
        return data.reduce((part, index) => part + getQueryPart(`${name}[${index}]`, data[index]), '');
    } else if (typeof data === 'object') {
        return Object.keys(data).reduce((part, index) => part + getQueryPart(`${name}[${index}]`, data[index]), '');
    }

    return `${name}=${encodeURIComponent(data)}&`;
}

/**
 * Convert data object to value for sending
 * @param {object} data - data object
 * @param {string} type - type of conversion
 * @returns {string|FormData} - output value
 */
export function convertData(data, type) {
    let convertedData;

    switch (type) {
    case 'serialize':
        convertedData = Object.keys(data)
                .reduce((query, name) => `${query}${getQueryPart(name, data[name])}`, '');
        return convertedData.length ? convertedData.slice(0, -1) : '';
    case 'formData':
        return Object.keys(data).reduce((formData, name) => {
            if (data[name] instanceof FileList) {
                if (data[name].length > 1) {
                    for (let i = 0; i < data[name].length; i += 1) {
                        formData.append(`${name}[${i}]`, data[name][i]);
                    }
                } else if (data[name].length === 1) {
                    formData.append(name, data[name][0]);
                }
            } else if (typeof data[name] === 'object') {
                Object.keys(data[name]).forEach(key => formData.append(`${name}[${key}]`, data[name][key]));
            } else {
                formData.append(name, data[name]);
            }

            return formData;
        }, new FormData());
    case 'json':
    default:
        return JSON.stringify(data);
    }
}
