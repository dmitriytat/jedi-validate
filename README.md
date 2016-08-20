# Now does not depend on jQuery

# TODO rewrite README
JQuery form validation plugin by Dimko

## How can I use it?

This is a JQuery plugin, and you can use it as regular JQuery plugin.

```javascript
    $('#myForm').jdvalidate(options);
```

## Why should I use it?

Because it is the best validaion&send form plugin.

## Basic validation rules:

* required
* email
* regexp
* filesize
* extension

## Error messages

Use messages object to set your own error messages.

```javascript
    messages: {
        phone: {
            regex: "Invalid phone number"
        },
        file: {
            filesize: "File too big"
        }
    },
```

### You can use it

Use initialization options in JS, like this.

```javascript
    $('#myForm').jdvalidate({
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

Use HTML attributes or classes, like this (now for e-mail and requared only)

```html
    <input id="name" type="text" name="name" required class="required">
    <input id="email" type="email" name="email" class="required">
```

* type="email" or class="email" for validate as email.
* required or class="required" for validate as required field.

## Send types

Now you can use 3 types of send data.

* regular serialize by default
* formData
* json

if you use formData, you can send file.

### serialize

```
    name=111&phone=222222222&email=wow%40wow.com
```

### formData

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

### json

```json
    {"name":"111","phone":"222222222","email":"wow@wow.com","file":"index.html"}
```

## Plugin dependencies

* jQuery 1.11 and above.

## Known problems

* Can not send several files.
* Send checkbox and radio problem.