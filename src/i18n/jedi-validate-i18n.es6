const dictionary = require('./jedi-validate-i18n-data.json');

let defaultLang = 'en';

export function translate(text, lang = defaultLang) {
    return (dictionary[lang] && dictionary[lang][text]) || text;
}

export function addTranslation(sourceText, translatedText, lang = defaultLang) {
    if (dictionary[lang] === undefined) {
        dictionary[lang] = {};
    }
    dictionary[lang][sourceText] = translatedText;
}
