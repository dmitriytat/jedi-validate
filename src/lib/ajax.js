// @flow

import type { AjaxOptions, Response } from '../types';

/**
 * Sending request
 * @param {Object} options - Sending options
 * @param {string} options.url
 * @param {string} options.enctype - Sending options
 * @param {string} options.sendType - Sending options
 * @param {string} options.method - Sending options
 * @param {string|FormData} options.data - Sending options
 * @param {function} translate
 * @returns {Promise}
 */
export function ajax(options: AjaxOptions, translate: Function): Promise<Response> {
    let { url } = options;
    let body;
    const method = options.method.toUpperCase();
    const headers = {};

    if (method === 'GET' && typeof options.data === 'string') {
        url += `?${options.data}`;
    } else if (method === 'POST') {
        body = options.data;
    }

    if (options.sendType === 'serialize') {
        headers['Content-type'] = options.enctype;
    } else if (options.sendType === 'json') {
        headers['Content-type'] = 'application/json; charset=utf-8';
    }

    return fetch(url, {
        method,
        headers,
        body,
    })
        .then(response => {
            try {
                return response.json();
            } catch (e) {
                return Promise.reject({
                    validationErrors: {
                        base: [translate('JSON parsing error')],
                    },
                });
            }
        })
        .catch(message =>
            Promise.reject({
                validationErrors: {
                    base: [translate('Something went wrong'), translate(message)],
                },
            }),
        );
}

export default ajax;
