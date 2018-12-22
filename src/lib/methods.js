// @flow

import type { Method, MethodMap } from '../types';

/**
 * Check value is not empty
 * @param {string|FileList|Array} value
 * @returns {boolean} - true == valid, false == invalid
 */
export function required(value: string): boolean {
    if (!value) return false;
    if (value.length === 0) return false;
    if (typeof value === 'string' && value.trim() === '') return false;

    return true;
}

/**
 * Test RegExp
 * @param {string} value
 * @param {RegExp} exp - regular expression
 * @returns {boolean} - true == valid, false == invalid
 */
export function regexp(value: string, exp: RegExp): boolean {
    return exp.test(value);
}

/**
 * Check value is an email
 * @param {string} value - email
 * @returns {boolean} - true == valid, false == invalid
 */
export function email(value: string): boolean {
    return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(value);
}

/**
 * Check file sizes are less than max
 * @param {FileList} value - FileList
 * @param {number} size - max file size
 * @returns {boolean} - true == valid, false == invalid
 */
export function filesize(value: FileList, size: number): boolean {
    return Array.from(value).reduce((r, file) => file.size <= size && r, true);
}

/**
 * Check file extensions
 * @param {FileList} value - FileList
 * @param {string} extensions - extensions list
 * @returns {boolean} - true == valid, false == invalid
 */
export function extension(value: FileList, extensions: string): boolean {
    return Array.from(value).reduce((r, file) => extensions.indexOf(file.name.split('.').pop()) !== -1 && r, true);
}

/**
 * Check value is phone number
 * @param {string} value - phone number
 * @returns {boolean} - true == valid, false == invalid
 */
export function tel(value: string): boolean {
    return /^([+]+)*[0-9\x20\x28\x29-]{5,20}$/.test(value);
}

/**
 * Check value is url
 * @param {string} value - url
 * @returns {boolean} - true == valid, false == invalid
 */
export function url(value: string): boolean {
    return /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi.test(value);
}

/**
 * Check value is greater than min number
 * @param {number} value - number
 * @param {number} number - min number
 * @returns {boolean} - true == valid, false == invalid
 */
export function min(value: number, number: number): boolean {
    return number <= value;
}

/**
 * Check value is less than max number
 * @param {number} value - number
 * @param {number} number - max number
 * @returns {boolean} - true == valid, false == invalid
 */
export function max(value: number, number: number): boolean {
    return value <= number;
}

/**
 * Check value is multiple of number
 * @param {number} value - number
 * @param {number} number - factor
 * @returns {boolean} - true == valid, false == invalid
 */
export function step(value: number, number: number): boolean {
    return value % number === 0;
}

/**
 * Check value is greater than min date
 * @param {Date} date - current date
 * @param {Date} mindate - max date
 * @returns {boolean} - true == valid, false == invalid
 */
export function minDate(date: Date, mindate: Date): boolean {
    return mindate <= date;
}

/**
 * Check date is less than max date
 * @param {Date} date - current date
 * @param {Date} maxdate - max date
 * @returns {boolean} - true == valid, false == invalid
 */
export function maxDate(date: Date, maxdate: Date): boolean {
    return date <= maxdate;
}

const requiredMethod: Method = {
    func: required,
    message: 'This field is required',
};

const regexpMethod: Method = {
    func: regexp,
    message: 'Please, provide correct value',
};

const emailMethod: Method = {
    func: email,
    message: 'This email is incorrect',
};

const filesizeMethod: Method = {
    func: filesize,
    message: 'This file is too large',
};

const extensionMethod: Method = {
    func: extension,
    message: 'This extension is not supported',
};

const telMethod: Method = {
    func: tel,
    message: 'This phone number is incorrect',
};

const urlMethod: Method = {
    func: url,
    message: 'Wrong url',
};

const minMethod: Method = {
    func: min,
    message: 'This number is too less',
};

const maxMethod: Method = {
    func: max,
    message: 'This number is too large',
};

const stepMethod: Method = {
    func: step,
    message: 'This value is not a multiple of the specified step value',
};

const minDateMethod: Method = {
    func: minDate,
    message: 'This date is too early',
};

const maxDateMethod: Method = {
    func: maxDate,
    message: 'This date is too late',
};

const methods: MethodMap = {
    required: requiredMethod,
    regexp: regexpMethod,
    email: emailMethod,
    filesize: filesizeMethod,
    extension: extensionMethod,
    tel: telMethod,
    url: urlMethod,
    min: minMethod,
    max: maxMethod,
    step: stepMethod,
    minDate: minDateMethod,
    maxDate: maxDateMethod,
};

export default methods;
