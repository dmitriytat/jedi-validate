# Jedi Validate
A lightweight form validation component.

[![NPM](https://nodei.co/npm/jedi-validate.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/jedi-validate/)

## How Can I Use It?

This is a JS Class, you can initialize it with a DOM element and an options object.

```javascript
    new JediValidate(formWrapper, options);
```

By default the form will be sent via ajax with parameters set in html.

## Why Should I Use It?

Because it provides a strict json format for server side implementation. You can send the form commonly serialized, as a json object, or as FormData. Whichever, the server will always receive the same structure. It is easy to implement. 

## Options

There are three option formats:

* Default component options.
* Form attributes (like action or method).
* Initialization options.

### Default Options
```javascript
    {
        ajax: {
            url: null,
            enctype: 'application/x-www-form-urlencoded',
            sendType: 'serialize', // 'formData', 'json'
            method: 'GET'
        },
        rules: {},
        messages: {},
        containers: {
            parent: 'form-group',
            message: 'help-block',
            baseMessage: 'base-error'
        },
        states: {
            error: 'error',
            valid: 'valid',
            pristine: 'pristine',
            dirty: 'dirty'
        },
        callbacks: {
            success: function () {
            },
            error: function () {
            }
        },
        clean: true,
        redirect: true
    }
```

### ajax

Via the ajax option we define how to send the form.
It can be ```null``` if we do not want the form to be sent.
Or it can be an object with the following options;

#### url
default: ```null```
Can be overridden by the `action` form attribute or init options.

#### enctype
default: ```'application/x-www-form-urlencoded'```
Can be overridden by the `enctype` form attribute, init options, or `sendType`.

#### method
default: ```'GET'```
Can be overridden by the `method` form attribute or init options.

### sendType
default: ```'serialize'```

There are three options:
 
* ```'formData'``` - send form as FormData. ```'Content-type'``` to ```'multipart/form-data'```
* ```'json'``` - send form as a JSON object. Set ```'Content-type'``` to ```'application/json; charset=utf-8'```
* ```'serialize'``` - send form as a regular request. Set ```'Content-type'``` to ```'application/x-www-form-urlencoded'```

If you use formData you are able to send files.

#### serialize

```
    name=111&phone=222222222&email=wow%40wow.com
```

#### formData

```
-----------------------------678106150613000712676411464
Content-Disposition: form-data; name="name"

111
-----------------------------678106150613000712676411464
Content-Disposition: form-data; name="phone"

222222222
-----------------------------678106150613000712676411464
Content-Disposition: form-data; name="email"
...
```

#### json

```json
    {"name":"111","phone":"222222222","email":"wow@wow.com","file":"index.html"}
```

### Rules
Rules used for defining input validation by name;

#### Basic Validation Rules:

By default rules are not defined. You can set them in html, using attributes (or classes) or within the init options.

> - required :  boolean
> - regexp : RegExp
> - email :  boolean
> - tel :  boolean
> - url :  boolean
> - filesize: number
> - extension: string

You can use these attributes:
> - type - email, tel и url regular regexp for each type.
> - pattern - regexp with attribute value.
> - required - check input for empty value.

Like this:

```html
    <input id="name" type="text" name="name" required class="required">
    <input id="email" type="email" name="email" class="required">
```

* type="email" or class="email" for validate as email.
* required or class="required" for validate as required field.

#### Custom Validation Rules

You can set your own rules using the ```addMethod``` function:

```
JediValidate.addMethod('methodName', function (value, element, options) {
    return // true if valid
}, 'Error message');
```

### Initialization Options Example

You can use initialization options like this.

```javascript
    new JediValidate(formWrapper, {
        rules: {
            name: {
                required: true
            },
            email: {
                email: true
            },
            phone: {
                regexp: /^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/
            },
            file: {
                filesize: 10000,
                extension: "html|css|txt"
            }
        }
    });
```

## Error Messages

Use a messages object to set your own error messages, by input name.

```javascript
    messages: {
        phone: {
            regexp: "Invalid phone number"
        },
        file: {
            filesize: "File is too big"
        }
    },
```
