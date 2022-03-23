import * as RNLocalize from 'react-native-localize'
import i18n from 'i18n-js'
import {fallbackLang} from '../../envrionment.';
import { I18nManager } from 'react-native';

const translations = {
    en: () => require('./en.json'),
    fr: () => require('./fr.json'),
    ar: () => require('./ar.json')
} 
 

i18n.defaultLocale = fallbackLang;
i18n.fallbacks = true;
i18n.missingBehaviour = "guess";

export function changeCulture(culture) {
    let lang = {languageTag: culture}
    if (!culture) { 
        lang = RNLocalize.findBestAvailableLanguage(Object.keys(translations))  
    }
    let {languageTag} = lang
    i18n.translations = {[languageTag]: translations[languageTag]()}
    i18n.locale = languageTag; 
    let isRtl = isRTL(languageTag);
    I18nManager.forceRTL(isRtl);
}

function isRTL(culture) {
    return ["ar"].includes(culture.toLowerCase())
}