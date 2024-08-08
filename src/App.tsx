import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useReducer } from 'react';
import { reducer } from './reducers/reducer';
import { initialState } from './mocks/initialState';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Google Traslate</h1>
    </div>
  );
}

export default App;