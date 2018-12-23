import { ajax } from '../src/lib/ajax';

describe('Ajax', () => {
    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true, json() {} }));
    });

    it('Should work GET', () => {
        const options = {
            method: 'GET',
            url: '/',
            data: 'hello=2',
            sendType: 'serialize',
            enctype: 'enctype',
        };

        const translate = jest.fn();

        ajax(options, translate);

        expect(window.fetch).toHaveBeenCalledWith('/?hello=2', {
            body: undefined,
            headers: { 'Content-type': 'enctype' },
            method: 'GET',
        });
    });

    it('Should work POST', () => {
        const options = {
            method: 'POST',
            url: '/',
            data: '{}',
            sendType: 'json',
            enctype: 'enctype',
        };

        const translate = jest.fn();

        ajax(options, translate);

        expect(window.fetch).toHaveBeenCalledWith('/', {
            body: '{}',
            headers: { 'Content-type': 'application/json; charset=utf-8' },
            method: 'POST',
        });
    });

    it('Should work POST formData', () => {
        const formData = new FormData();
        const options = {
            method: 'POST',
            url: '/',
            data: formData,
            sendType: 'formData',
            enctype: 'multipart/form-data',
        };

        const translate = jest.fn();

        ajax(options, translate);

        expect(window.fetch).toHaveBeenCalledWith('/', {
            body: formData,
            headers: {},
            method: 'POST',
        });
    });

    it('Should reject on error', done => {
        const translate = jest.fn(a => a);
        window.fetch = jest.fn().mockImplementation(() => Promise.reject('So bad'));

        ajax({}, translate).catch(errors => {
            expect(window.fetch).toHaveBeenCalledWith(undefined, { body: undefined, headers: {}, method: 'GET' });
            expect(errors).toEqual({ validationErrors: { base: ['Something went wrong', 'So bad'] } });
            done();
        });
    });
});
