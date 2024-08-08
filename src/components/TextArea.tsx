import { Form } from 'react-bootstrap';

interface CommonTypes {
    type: 'from' | 'to',
    loading?: boolean,
}

interface Props extends CommonTypes {
    value: string,
    onChange: (value: string) => void
}

const commonStyles = { border: '0', height: '200px' }

const getPlaceholder = ({ type, loading }: CommonTypes ) => {
    if (type === 'from') {
        return 'Introduce un texto'
    }
    if (loading === true) {
        return 'Cargando...'
    }
    return 'Traducción'
}

function TextArea({ type, loading, value, onChange }: Props): JSX.Element {
    const styles = (type === 'to') ? { ...commonStyles, backgroundColor: '#f5f5f5'} : commonStyles

    const handlerChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => {
        onChange(evt.target.value);
    }

    return (
        <Form.Control
            as='textarea'
            placeholder={getPlaceholder({type, loading})}
            style={styles}
            value={value}
            onChange={handlerChange}
        />
    );
}

export default TextArea;