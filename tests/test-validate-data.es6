import { validateField, validateData } from '../src/lib/validate-data.es6';
import methods from '../src/lib/methods.es6';

const rules = {
    phone: {
        required: true,
        regexp: /^\d*$/,
    },
    phone2: {
        regexp: /^\d*$/,
    },
};

const data = {
    phone: '92356234',
    phone2: 'sdfsefef',
};

const inputs = {
    phone: document.createElement('input'),
    phone2: document.createElement('input'),
};

inputs.phone.name = 'phone';
inputs.phone.value = data.phone;
inputs.phone2.name = 'phone2';
inputs.phone2.value = data.phone2;

const errorMessages = {
    phone: {
        required: 'It is required',
        regexp: 'Only digits available',
    },
    phone2: {
        regexp: 'Only digits available',
    },
};

describe('Validate data', function () {
    describe('Validate Field', function () {
        it('Pass correct value', function () {
            assert.deepEqual(validateField(rules.phone, methods, data.phone, 'phone', errorMessages), []);
        });

        it('Pass incorrect value', function () {
            assert.deepEqual(validateField(rules.phone2, methods, data.phone2, 'phone2', errorMessages), [errorMessages.phone2.regexp]);
        });
    });

    describe('Validate data', function () {
        it('Validate values', function () {
            assert.deepEqual(validateData(rules, methods, data, errorMessages), { phone: undefined, phone2: [errorMessages.phone2.regexp] });
        });
    });

    describe('Depends data', function () {
        it('Validate values', function () {
            assert.deepEqual(validateData(rules, methods, data, errorMessages), { phone: undefined, phone2: [errorMessages.phone2.regexp] });
        });
    });
});
