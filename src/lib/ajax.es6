// todo maybe it can be vendor library?
export function ajax(options) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(options.method, options.url + (options.method.toUpperCase() === 'GET' ? (`?${options.data}`) : ''), true); // todo concat url and params

        if (options.sendType === 'serialize') {
            xhr.setRequestHeader('Content-type', options.enctype);
        } else if (options.sendType === 'json') {
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = {};

                    try {
                        response = JSON.parse(xhr.responseText);
                    } catch (e) {
                        response.validationErrors = { base: ['JSON parsing error'] };  // todo: language extension
                    }

                    resolve(response);
                } else {
                    reject({
                        xhr,
                        method: options.method,
                        url: options.url,
                        status: xhr.status,
                        statusText: xhr.statusText,
                    });
                }
            }
        };

        xhr.send(options.method.toUpperCase() === 'POST' ? options.data : '');
    }
    );
}

export default ajax;
