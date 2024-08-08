import useLanguageState from './hooks/useLanguageState.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import './App.css';



function App(): JSX.Element {
  const { fromLanguage, toLanguage, setFromLanguages, interchangeLanguages } = useLanguageState()
  return (
    <Container fluid>
      <h1>Google Traslate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>

        <Col>
          <button onClick={() => interchangeLanguages()}>Interchange</button>
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