import {
    getData,
    getInputValue,
    getRadioGroupValue,
    getValueByName,
    getValueByPath,
    convertNameToPath,
    createObject,
    getInputData,
    getQueryPart,
    convertData,
} from '../src/lib/get-data.es6';

const data = {
    phone: '92356234',
    phone2: 'sdfsefef',
    radio: '2',
    parent: {
        child: 'value',
    },
};

const inputs = {
    phone: document.createElement('input'),
    phone2: document.createElement('input'),
    'parent[child]': document.createElement('input'),
    radio: [
        createRadioElement('radio', 1),
        createRadioElement('radio', 2, true),
        createRadioElement('radio', 3),
    ],
};

inputs.phone.name = 'phone';
inputs.phone.value = data.phone;
inputs.phone2.name = 'phone2';
inputs.phone2.value = data.phone2;
inputs['parent[child]'].name = 'parent[child]';
inputs['parent[child]'].value = data.parent.child;

describe('Get data', () => {
    it('createObject', () => {
        assert.deepEqual(createObject(['parent', 'child', ''], 'value'), { parent: { child: 'value' } });
    });

    it('convertNameToPath', () => {
        assert.deepEqual(convertNameToPath('parent[child]'), ['parent', 'child', '']);
    });

    it('getValueByPath', () => {
        assert.deepEqual(getValueByPath(['parent', 'child'], data), 'value');
    });

    it('getValueByName', () => {
        assert.deepEqual(getValueByName('radio', data), '2');
    });

    it('getRadioGroupValue', () => {
        assert.deepEqual(getRadioGroupValue(inputs.radio), data.radio);
    });

    it('getInputValue', () => {
        assert.deepEqual(getInputValue(inputs.phone), data.phone);
    });

    it('getInputData', () => {
        assert.deepEqual(getInputData(inputs.phone), { phone: data.phone });
    });

    it('getData', () => {
        assert.deepEqual(getData(inputs), data);
    });

    it('getQueryPart', () => {
        assert.deepEqual(getQueryPart('phone', data.phone), `phone=${data.phone}&`);
    });

    describe('convertData', () => {
        it('serialize', () => {
            assert.deepEqual(convertData(data, 'serialize'), 'phone=92356234&phone2=sdfsefef&radio=2&parent[child]=value');
        });
    });
});


function createRadioElement(name, value, checked = false) {
    const radioInput = document.createElement('input');

    radioInput.setAttribute('type', 'radio');
    radioInput.name = name;
    radioInput.value = value;

    if (checked) {
        radioInput.setAttribute('checked', 'checked');
    }

    return radioInput;
}
