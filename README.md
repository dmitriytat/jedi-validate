# Jedi Validate
Lightweight form validation component.

[![NPM](https://nodei.co/npm/jedi-validate.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/jedi-validate/)

## How can I use it?

This is a JS class, and you can instance it with DOM element and options object.

```javascript
    new JediValidate(formWrapper, options);
```

By default form will be sent via ajax with parameters which was setted in html.

## Why should I use it?

Because it provide strict json format for interaction. You can send form as common serialize, as json object, or as FormData. But server answer always have one structure. It is easy to implement. 

## Options

Options have 3 levels.

* Default component options;
* Form attributes like action or method;
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

Via ajax option we can say how to send out form.
It can be ```null``` if we do not want to send form.
Or it can be an object with send options;

#### url
default: ```null```
But it will be changed by action form attribute or init options.

#### enctype
default: ```'application/x-www-form-urlencoded'```
But it can be changed by enctype form attribute, or init options, or sendType.

#### method
default: ```'GET'```
But it can be changed by method form attribute, or init options.

### sendType
default: ```'serialize'```

Now you can use 3 types of send data. It can be:
 
* ```'formData'``` - send form as FormData. ```'Content-type'``` to ```'multipart/form-data'```
* ```'json'``` - send form as JSON object. Set ```'Content-type'``` to ```'application/json; charset=utf-8'```
* ```'serialize'``` - send form as regular request. Set ```'Content-type'``` to ```'application/x-www-form-urlencoded'```

if you use formData, you can send file.

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
Rules used for defining input validation by name;

#### Basic validation rules:

By default rules are not defined. But it can be setted in html by attributes (or classes) and in init options.

> - required :  boolean
> - regexp : RegExp
> - email :  boolean
> - tel :  boolean
> - url :  boolean
> - filesize: number
> - extension: string

We can use these attributes:
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

#### You can set youe own rules by ```addMethod```

```
JediValidate.addMethod('methodName', function (value, element, options) {
    return // true if valid
}, 'Error message');
```

### You can use it

Use initialization options in JS, like this.

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

Use messages object to set your own error messages by input name.

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
