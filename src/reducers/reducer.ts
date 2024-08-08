import type{ ActionReducer, StateLanguages } from "../types/types.d";

export function reducer(state: StateLanguages, action: ActionReducer): StateLanguages {
    const { type } = action;

    switch ( type ) {
        case 'INTERCHANGE_LANGUAGES':
            if(state.fromLanguage === 'auto') return state;
            return {
                ...state,
                fromLanguage: state.toLanguage,
                toLanguage: state.fromLanguage,
            }
        case 'SET_FROM_LANGUAGE':
            return {
                ...state,
                fromLanguage: action.payload
            }
        case 'SET_TO_LANGUAGE':
            return {
                ...state,
                toLanguage: action.payload
            }
        case 'SET_FROM_TEXT_LANGUAGE':
            return {
                ...state,
                loading: true,
                fromText: action.payload,
                resultText: ''
            }
        case 'SET_RESULT_TEXT_LANGUAGE':
            return {
                ...state,
                loading: false,
                resultText: action.payload
            }
        default:
            throw new Error(`Action type "${type}" is not defined`);
    }
}