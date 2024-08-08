import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants/constants';
export interface StateLanguages {
    fromLanguage: string;
    toLanguage:   string;
    fromText:     string;
    resultText:   string;
    loading:      boolean;
}

export type ActionReducer =
    | {type: 'INTERCHANGE_LANGUAGES'}
    | {type: 'SET_FROM_LANGUAGE',        payload: string}
    | {type: 'SET_TO_LANGUAGE',          payload: string}
    | {type: 'SET_FROM_TEXT_LANGUAGE',   payload: string}
    | {type: 'SET_RESULT_TEXT_LANGUAGE', payload: string}

interface UseLanguageStateType extends StateLanguages {
    interchangeLanguages:   () => void,
    setFromLanguages:       (fromLanguage: Language) => void,
    setToLanguages:         (toLanguage: Language) => void,
    setFromTextLanguages:   (fromText: string) => void,
    setResultTextLanguages: (resultText: string) => void
}

export type Language     = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLanguage = Language | AutoLanguage;