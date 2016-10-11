describe('JediValidate', function () {
    describe('Get value', function () {
        var textInput = document.getElementById('textInput');
        var checkboxInput = document.getElementById('checkboxInput');
        var radioInput1 = document.getElementById('radioInput1');
        var radioInput2 = document.getElementById('radioInput2');
        var select = document.getElementById('select');
        var radioGroup = document.getElementsByName('radio');

        it('Get text value', function () {
            assert.equal(JediValidate.getInputValue(textInput), 'test');
        });

        it('Get checkbox checked value', function () {
            checkboxInput.checked = true;
            assert.equal(JediValidate.getInputValue(checkboxInput), 'test');
        });

        it('Get checkbox not checked value', function () {
            checkboxInput.checked = false;
            assert.equal(JediValidate.getInputValue(checkboxInput), '');
        });

        it('Get radio checked value', function () {
            radioInput1.checked = true;
            assert.equal(JediValidate.getInputValue(radioInput1), 'first');
        });

        it('Get radio not checked value', function () {
            radioInput1.checked = false;
            assert.equal(JediValidate.getInputValue(radioInput1), '');
        });

        it('Get radio group value', function () {
            radioInput2.checked = true;
            assert.equal(JediValidate.getRadioGroupValue(radioGroup), 'second');
        });

	it('Get radio not checked value', function () {
               radioInput1.checked = false;
              radioInput2.checked = false;
		 assert.equal(JediValidate.getInputValue(radioInput1), '');
		 assert.equal(JediValidate.getInputValue(radioInput2), '');
        });
  
	it('Get select value', function () {
            assert.equal(JediValidate.getInputValue(select), 'second');
        });
    });

    describe('Form options', function () {
        var form = document.querySelector('#myForm');

        it('Check FormData', function () {
            assert.deepEqual(JediValidate.getFormOptions(form), {
                ajax: {
                    url: './ajax.php',
                    method: 'POST',
                    enctype: 'multipart/form-data',
                    sendType: 'formData'
                }
            });
        });

        it('Check with out enctype', function () {
            form.removeAttribute('enctype');

            assert.deepEqual(JediValidate.getFormOptions(form), {
                ajax: {
                    url: './ajax.php',
                    method: 'POST'
                }
            });
        });
    });

    describe('Parse input name', function () {
        var simpleName = 'name';
        var arrayName = 'name[]';
        var objectName = 'name[a]';
        var objectArrayName = 'name[a][]';
        var arrayObjectName = 'name[][a]';
        var value = 'value';

        it('Simple Name', function () {
            assert.deepEqual(JediValidate.parseInputName(simpleName, value), {name: value});
        });

        it('Array Name', function () {
            assert.deepEqual(JediValidate.parseInputName(arrayName, value), {name: [value]});
        });

        it('Object Name', function () {
            assert.deepEqual(JediValidate.parseInputName(objectName, value), {name: {a: value}});
        });

        it('Object Array Name', function () {
            assert.deepEqual(JediValidate.parseInputName(objectArrayName, value), {name: {a: [value]}});
        });

        it('Array Object Name', function () {
            assert.deepEqual(JediValidate.parseInputName(arrayObjectName, value), {name: [{a: value}]});
        });
    });
});
