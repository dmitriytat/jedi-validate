import deepmerge from 'deepmerge';

const NAME = /(\[(\w*)\]|\w*)/gi;
export function getInputData(input) {
    const { name } = input;
    const value = getInputValue(input);
    const path = [];

    let matches = NAME.exec(name);
    while (matches !== null) {
        if (matches.index === NAME.lastIndex) {
            NAME.lastIndex += 1;
        }

        path.push(matches[2] || matches[1]);

        matches = NAME.exec(name);
    }

    return createObject(path, value);
}

export function getInputValue(input) {
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
    default:
        return input.value;
    }
}

export function getRadioGroupValue(elements) {
    return [...elements].map(radio => getInputValue(radio)).filter(Boolean)[0];
}

export function createObject(path, value) {
    const segment = path[0];

    if (segment.length === 0) {
        return value;
    } else if (segment === '[]') {
        return [createObject(path.slice(1), value)];
    }

    return { [segment]: createObject(path.slice(1), value) };
}

export function getData(inputs) {
    return [...inputs].reduce((data, input) => deepmerge(data, getInputData(input)), {});
}
