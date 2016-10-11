const i18n = require('../i18n/jedi-validate-i18n-data.json');
let currentLang = "ru";

export function setLanguage(id){
  currentLang = id;
}

export function i18n(text){
  return (i18n[currentLang] && i18n[currentLang][text]) || text;
}
