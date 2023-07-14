import { LANGUAGE } from '../tools/constant'
import { ru } from './ru'
import { uz } from './uz'
import { en } from './en'

export const getLanguage = () => {
    return localStorage.getItem(LANGUAGE)
}

export const getText = (word) => {
    return getLanguage() === 'en'
        ? en[word]
        : getLanguage() === 'ru'
        ? ru[word]
        : uz[word]
}

export const getReduxText = (word, lang) => {
    return lang === 'en' ? en[word] : lang === 'ru' ? ru[word] : uz[word]
}
