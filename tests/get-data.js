import { createCheckableElement } from '../test-utils/utils';

import {
    getData,
    getInputValue,
    getRadioGroupValue,
    getValueByName,
    getValueByPath,
    createObject,
    getInputData,
} from '../src/lib/get-data';

const data = {
    date: new Date('2017-10-12'),
    phone: '92356234',
    phone2: 'sdfsefef',
    radio: '2',
    parent: {
        child: 'value',
    },
};


const inputs = {
    date: document.createElement('input'),
    phone: document.createElement('input'),
    phone2: document.createElement('input'),
    'parent[child]': document.createElement('input'),
    radio: [
        createCheckableElement('radio', 1),
        createCheckableElement('radio', 2, true),
        createCheckableElement('radio', 3),
    ],
};

inputs.phone.name = 'phone';
inputs.phone.value = data.phone;
inputs.phone2.name = 'phone2';
inputs.phone2.value = data.phone2;
inputs['parent[child]'].name = 'parent[child]';
inputs['parent[child]'].value = data.parent.child;

inputs.date.name = 'date';
inputs.date.type = 'date';
inputs.date.value = '2017-10-12';

describe('Get data', () => {
    it('createObject', () => {
        assert.deepEqual(createObject(['parent', 'child', ''], 'value'), { parent: { child: 'value' } });
        assert.deepEqual(createObject(['hello', '[]'], 'value'), { hello: ['value'] });
    });

    it('getValueByPath', () => {
        assert.deepEqual(getValueByPath(['parent', 'child'], data), 'value');
        assert.deepEqual(getValueByPath(['parent'], undefined), ''); // todo rly?
    });

    it('getValueByName', () => {
        assert.deepEqual(getValueByName('radio', data), '2');
    });

    it('getRadioGroupValue', () => {
        assert.deepEqual(getRadioGroupValue(inputs.radio), data.radio);
        assert.deepEqual(getRadioGroupValue([
            createCheckableElement('radio', 2, true, 'checkbox'),
            createCheckableElement('radio', 3, true, 'checkbox'),
        ]), ['2', '3']);
    });

    describe('getInputValue', () => {
        it('text', () => {
            assert.deepEqual(getInputValue(inputs.phone), data.phone);
            assert.deepEqual(getInputValue(undefined), '');
        });

        it('file', () => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            assert.deepEqual(getInputValue(fileInput).length, 0);
        });

        it('select-one', () => {
            const select = document.createElement('select');
            select.innerHTML = '<option selected value="12">23</option>';

            assert.deepEqual(getInputValue(select), '12');
        });

        it('select-one without options', () => {
            const select = document.createElement('select');

            assert.deepEqual(getInputValue(select), '');
        });

        it('select-multiple', () => {
            const select = document.createElement('select');
            select.setAttribute('multiple', '');
            select.innerHTML = `
                <option selected value="12">23</option>
                <option selected value="34">45</option>
            `;

            assert.deepEqual(getInputValue(select), ['12', '34']);
        });

        it('date', () => {
            const dateInput = document.createElement('date');
            dateInput.type = 'date';
            dateInput.value = '2017-10-12';
            assert.deepEqual(getInputValue(dateInput), new Date('2017-10-12'));
            dateInput.value = '';
            assert.deepEqual(getInputValue(dateInput), '');
        });
    });

    it('getInputData', () => {
        assert.deepEqual(getInputData(inputs.phone), { phone: data.phone });
    });

    it('getData', () => {
        assert.deepEqual(getData(inputs), data);
    });
});
