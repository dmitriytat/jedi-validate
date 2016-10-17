const dictionary = require('./jedi-validate-i18n-data.json');

let currentLang = 'en';

export function setLanguage(id) {
    currentLang = id;
}

export function translate(text, lang = currentLang) {
    return (dictionary[lang] && dictionary[lang][text]) || text;
}

export function addTranslation(sourceText, translatedText, lang = currentLang) {
    if (dictionary[lang] === undefined) {
        dictionary[lang] = {};
    }
    dictionary[lang][sourceText] = translatedText;
}
