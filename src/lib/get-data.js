// @flow

import deepmerge from './deepmerge';
import { convertNameToPath } from './convert-data';
import type { Path, Data, Input, InputMap } from '../types';
import GroupInput from './group-input';

/**
 * Create object by path and value
 * @param {Array} path - path array
 * @param {string|FileList} value - input value
 * @returns {object} - data object
 */
export function createObject(path: Path, value: Data): Data {
    const segment = path[0];

    if (!segment || segment.length === 0) {
        return value;
    }

    if (segment === '[]') {
        return [createObject(path.slice(1), value)];
    }

    const data: Data = { [segment]: createObject(path.slice(1), value) };

    return data;
}

/**
 * Get value from data object by path
 * @param {Array} path - value path
 * @param {object} data - data object
 * @returns {string} - value
 */
export function getValueByPath(path: Path, data: Data) {
    return path.reduce((value, segment) => (segment && value ? value[segment] : value), data || '');
}

/**
 * Get value from data object by name
 * @param {string} name - input name
 * @param {object} data - data object
 */
export function getValueByName(name: string, data: Data) {
    const path = convertNameToPath(name);
    return getValueByPath(path, data);
}

/**
 * Get value from radio group
 * @param {Array} inputs - array of radio inputs
 * @returns {string|Array.<string>} - value of checked input
 */
export function getRadioGroupValue(input: GroupInput) {
    const values = input.inputs.map(radio => getInputValue(radio)).filter(Boolean);

    return values.length > 1 ? values : values[0];
}

/**
 * Get form input value
 * @param {Element|HTMLInputElement|HTMLSelectElement|Array} input - input
 * @returns {string|Date|FileList|Array} - value of input, or array of values if input is select
 */
export function getInputValue(input: Input): Data {
    if (!input) return '';

    const { type } = input;

    if (input instanceof GroupInput) {
        return getRadioGroupValue(input);
    }

    switch (type) {
        case 'select-one':
            return input.options && input.options[input.selectedIndex] ? input.options[input.selectedIndex].value : '';
        case 'select-multiple':
            return [...input.options].filter(option => option.selected).map(option => option.value);
        case 'checkbox':
        case 'radio':
            return input.checked ? input.value : '';
        case 'file':
            return input.files;
        case 'date':
            return input.value ? new Date(input.value) : '';
        default:
            return input.value;
    }
}

/**
 * Get input value as an object keyed by input name
 * @param {HTMLInputElement|Array} input - input element or Array of HTMLInputElements
 * @returns {object} - data
 */
export function getInputData(input: Input | GroupInput): Data {
    const value = getInputValue(input);
    const path = convertNameToPath(input.name);

    return createObject(path, value);
}

/**
 * Get data object with values from inputs object
 * @param {object} inputs - inputs object
 * @returns {object} - data object
 */
export function getData(inputs: InputMap): Data {
    return Object.keys(inputs).reduce((data, name) => deepmerge(data, getInputData(inputs[name])), {});
}
