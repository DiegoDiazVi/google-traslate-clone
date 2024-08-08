import { useReducer } from 'react';
import { reducer } from '../reducers/reducer';
import { initialState } from '../mocks/initialState';
import type{ FromLanguage, Language, UseLanguageStateType } from '../types/types.d';


function useLanguageState(): UseLanguageStateType {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { fromLanguage, toLanguage, fromText, resultText, loading } = state;

    const interchangeLanguages = (): void => {
        dispatch({
            type: 'INTERCHANGE_LANGUAGES'
        })
    }

    const setFromLanguages = (fromLanguage: FromLanguage): void => {
        dispatch({
            type: 'SET_FROM_LANGUAGE',
            payload: fromLanguage
        })
    }

    const setToLanguages = (toLanguage: Language): void => {
        dispatch({
            type: 'SET_TO_LANGUAGE',
            payload: toLanguage
        })
    }

    const setFromTextLanguages = (fromText: string): void => {
        dispatch({
            type: 'SET_FROM_TEXT_LANGUAGE',
            payload: fromText
        })
    }

    const setResultTextLanguages = (resultText: string): void => {
        dispatch({
            type: 'SET_RESULT_TEXT_LANGUAGE',
            payload: resultText
        })
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        resultText,
        loading,
        interchangeLanguages,
        setFromLanguages,
        setToLanguages,
        setFromTextLanguages,
        setResultTextLanguages
    }
}

export default useLanguageState;