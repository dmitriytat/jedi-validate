const dictionary = require('./jedi-validate-i18n-data.json');

let currentLang = "en";

export function setLanguage(id) {
    currentLang = id;
}

export default function translate(text, lang = currentLang) {
    return (dictionary[lang] && dictionary[lang][text]) || text;
}
