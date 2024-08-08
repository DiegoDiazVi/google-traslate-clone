import useLanguageState from './hooks/useLanguageState.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button} from 'react-bootstrap';
import './App.css';
import { AUTO_LANGUAGE } from './constants/constants.ts';
import { SwitchIcon } from './components/Icons.tsx';



function App(): JSX.Element {
  const { fromLanguage, toLanguage, interchangeLanguages } = useLanguageState()
  return (
    <Container fluid>
      <h1>Google Traslate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>

        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={() => interchangeLanguages()}>
            <SwitchIcon/>
          </Button>
        </Col>

        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}

export default App;