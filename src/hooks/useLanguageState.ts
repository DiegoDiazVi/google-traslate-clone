import { useReducer } from 'react';
import { reducer } from '../reducers/reducer';
import { initialState } from '../mocks/initialState';
function useLanguageState() {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { fromLanguage, toLanguage, fromText, resultText, loading } = state;

}

export default useLanguageState;