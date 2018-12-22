// @flow

import type { TranslationMap } from '../types';

const defaultDictionary = require('./jedi-validate-i18n-data.json');

/**
 * Dictionary for translation
 */
export default class Dictionary {
    /**
     * Dictionary store
     * @type {Object}
     */
    dictionary: TranslationMap = {};

    /**
     * Default language
     * @type {string}
     */
    defaultLanguage: string = 'en';

    /**
     * Dictionary
     * @param {Object} translations
     */
    constructor(translations: TranslationMap) {
        this.addTranslations(defaultDictionary);
        this.addTranslations(translations);
    }

    /**
     * Translate phrase
     * @param {string} text - phrase to translate
     * @param {string} language - language token
     * @returns {string} - translated text
     */
    translate(text: string, language: string = this.defaultLanguage) {
        return (this.dictionary[language] && this.dictionary[language][text]) || text;
    }

    /**
     * Add translation pair to dictionary
     * @param {string} sourceText - phrase
     * @param {string} translatedText - translated phrase
     * @param {string} language - language token
     */
    addTranslation(sourceText: string, translatedText: string, language: string = this.defaultLanguage) {
        if (this.dictionary[language] === undefined) {
            this.dictionary[language] = {};
        }

        this.dictionary[language][sourceText] = translatedText;
    }

    /**
     * Add translations to dictionary
     * @param {Object<string, Object<string, string>>} translations
     */
    addTranslations(translations: TranslationMap) {
        Object.keys(translations).forEach(language => {
            Object.keys(translations[language]).forEach(translation => {
                this.addTranslation(translation, translations[language][translation], language);
            });
        });
    }
}
