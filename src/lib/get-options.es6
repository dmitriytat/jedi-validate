export function getFormOptions(form) {
    const ajax = {
        url: form.getAttribute('action'),
        method: form.getAttribute('method'),
        enctype: form.getAttribute('enctype'),
    };

    return {
        ajax: {
            ...ajax,
            sendType: ajax.enctype === 'multipart/form-data' ? 'formData' : undefined,
        },
    };
}

export function getInputRules(input) {
    const defaultRules = ['required', 'email', 'tel', 'url']; // todo before initialization adding

    const rules = defaultRules.reduce((inputRules, rule) => ({
        ...inputRules,
        [rule]: input.hasAttribute(rule) || input.type === rule || input.classList.contains(rule),
    }), {});

    return {
        ...rules,
        regexp: input.hasAttribute('pattern') ? new RegExp(input.getAttribute('pattern')) : undefined,
    };
}
