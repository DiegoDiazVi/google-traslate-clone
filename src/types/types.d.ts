export interface StateLanguages {
    fromLanguage: string;
    toLanguage: string;
    fromText: string;
    resultText: string;
    loading: boolean;
}

export type ActionReducer =
    | {type: 'INTERCHANGE_LANGUAGES'}
    | {type: 'SET_FROM_LANGUAGE', payload: string}
    | {type: 'SET_TO_LANGUAGE', payload: string}
    | {type: 'SET_FROM_TEXT_LANGUAGE', payload: string}
    | {type: 'SET_RESULT_TEXT_LANGUAGE', payload: string}

interface UseLanguageStateType extends StateLanguages {
    interchangeLanguages:   () => void,
    setFromLanguages:       (fromLanguage: string) => void,
    setToLanguages:         (toLanguage: string) => void,
    setFromTextLanguages:   (fromText: string) => void,
    setResultTextLanguages: (resultText: string) => void
}