# Jedi Validate
Lightweight form validation component.

[![NPM](https://nodei.co/npm/jedi-validate.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/jedi-validate/)

## How can I use it?

This is a JS class, and you can create a new instance by passing in a DOM element and an options object.

```javascript
    new JediValidate(formWrapper, options);
```

By default, the form will be sent via ajax with the parameters which were set in HTML.

## Why should I use it?

Because it provides a strict json format for interaction. You can send a form in many different ways:

* serialized
* as a JSON object
* as FormData.

But server answer always have one structure. It is easy to implement. 

## Options

There are three types of option:

* Default component options;
* Form attributes such as action or method;
* Initialization options.

### Default options

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
The 'Ajax' property contains information on how you want the form to be sent.
It can be ```null``` if you do not want to send the formm or it can be an object with send options.

#### url
default: ```null```
This can be set from the form's 'action' attribute, or in the init options.

#### enctype
default: ```'application/x-www-form-urlencoded'```
This can be changed by setting the 'enctype' form attribute, sendType, or in the init options.

#### method
default: ```'GET'```
This can be changed by the 'method' form attribute, or in the init options.

### sendType
default: ```'serialize'```

You can encode and send the data in three different ways. Valid options are:
 
* ```'formData'``` - send form as FormData. ```'Content-type'``` to ```'multipart/form-data'```
* ```'json'``` - send form as JSON object. Set ```'Content-type'``` to ```'application/json; charset=utf-8'```
* ```'serialize'``` - send form as regular request. Set ```'Content-type'``` to ```'application/x-www-form-urlencoded'```

Files can only be sent using 'formData' encoding.

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

### rules

Rules used to valid input. Each form element will be matched by the 'name' attribute with a corresponding rule, if one exists. If no rule exists, then no validation will occur.

#### Basic validation rules:

Rules are not defined by default, but they can be set via attributes or classes in HTML, or in the init options.

> - required :  boolean
> - regexp : RegExp
> - email :  boolean
> - tel :  boolean
> - url :  boolean
> - filesize: number
> - extension: string

These attributes can be used
> - type - email, tel or url (regexp will be used for each type).
> - pattern - regexp with attribute value.
> - required - check input for empty value.

Example:

```html
    <input id="name" type="text" name="name" required class="required">
    <input id="email" type="email" name="email" class="required">
```

* type="email" or class="email" to validate as email.
* required or class="required" to validate as a required field.

#### You can set your own rules with ```addMethod```

```
JediValidate.addMethod('methodName', function (value, element, options) {
    return // true if valid
}, 'Error message');
```

### Usage

Add rules as part of your options object when initializing:

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

## Error messages

You can define your own error messages in case validation fails. In case a form element fails validation, then the message corresponding to the element's 'name' attribute will apply.

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

# Changelist

- 1.0.4 add simple language support
