// @flow

/**
 * Merge literal object deeply and concat arrays
 * @param {Object|Array|*} first
 * @param {Object|Array|*} second
 * @return {Object|Array|*}
 */
function deepmerge(first: any, second: any): any {
    if (Array.isArray(first)) {
        return [].concat(first).concat(second);
    }

    if (first && first.constructor === Object) {
        return Object.keys(first).reduce(
            (o, key) => ({
                ...o,
                [key]: second ? deepmerge(first[key], second[key]) : first[key],
            }),
            second || {},
        );
    }

    return second || first;
}

export default deepmerge;
