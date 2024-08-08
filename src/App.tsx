import useLanguageState from './hooks/useLanguageState.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button, Stack } from 'react-bootstrap';
import './App.css';
import { AUTO_LANGUAGE } from './constants/constants.ts';
import { SwitchIcon } from './components/Icons.tsx';
import LanguageSelector from './components/LanguageSelector.tsx';
import TextArea from './components/TextArea.tsx';



function App(): JSX.Element {
  const {
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
  } = useLanguageState();

  return (
    <Container fluid>
      <h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png"
          alt="Google Traslate Icon"
          style={{width: '60px', marginRight: '10px'}}
        />
          Google Traslate
        </h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <h2>From</h2>
            <LanguageSelector
              type='from'
              value={fromLanguage}
              onChange={setFromLanguages}
            />
            <TextArea
              type='from'
              value={fromText}
              onChange={setFromTextLanguages}
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
            <TextArea
              type='to'
              loading={loading}
              value={resultText}
              onChange={setResultTextLanguages}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;