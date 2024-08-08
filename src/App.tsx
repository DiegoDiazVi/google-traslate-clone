import useLanguageState from './hooks/useLanguageState.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button, Form, Stack } from 'react-bootstrap';
import './App.css';
import { AUTO_LANGUAGE } from './constants/constants.ts';
import { SwitchIcon } from './components/Icons.tsx';
import LanguageSelector from './components/LanguageSelector.tsx';



function App(): JSX.Element {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguages, setToLanguages } = useLanguageState()
  return (
    <Container fluid>
      <h1>Google Traslate</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <h2>From</h2>
            <LanguageSelector
              type='from'
              value={fromLanguage}
              onChange={setFromLanguages}
            />
            <Form.Control
              as='textarea'
              placeholder='Introduce un texto'
              style={{height: '150px'}}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={() => interchangeLanguages()}>
            <SwitchIcon/>
          </Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <h2>To</h2>
            <LanguageSelector
              type='to'
              value={toLanguage}
              onChange={setToLanguages}
            />
            <Form.Control
              as='textarea'
              placeholder='Traducción'
              style={{height: '150px'}}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;