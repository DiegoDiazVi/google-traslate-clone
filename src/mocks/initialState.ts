import type { StateLanguages } from '../types/types.d';

export const initialState: StateLanguages = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    resultText: '',
    loading: false
}