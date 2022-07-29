import logo from './logo.svg';
import Row from './components/Row';
import Modal from './components/Modal';
import './App.css';
import { Grid } from './components/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learning Flexbox!
        </p>
      </header>
      <div role="main" className="flex justify-center m-10 content-center">
        {/* <Row /> */}
        {/* <Modal isOriental={true} /> */}
        <Grid />
      </div>
    </div>
  );
}

export default App;
