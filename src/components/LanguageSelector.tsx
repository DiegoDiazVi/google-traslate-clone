import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants/constants";
import type { FromLanguage, Language } from '../types/types';

type Props =
    | { type: 'from', value: FromLanguage, onChange: (payload: FromLanguage) => void }
    | { type: 'to',   value: Language,     onChange: (payload: Language) => void }

function LanguageSelector({ onChange, type, value}: Props): JSX.Element {

    const handlerChange = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
        onChange(evt.target.value as Language)
    }
    return (
        <Form.Select aria-label='Selecciona el idioma' onChange={handlerChange} value={value}>

            { type === 'from' && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}

            {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => {
                return (
                    <option key={key} value={key}>
                        {value}
                    </option>
                )
            })}
        </Form.Select>
    );
}

export default LanguageSelector;