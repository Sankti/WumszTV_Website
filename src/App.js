import logo from './assets/Wumsz_Logo.svg';
import './App.css';

import { Title } from './components/Title/Title';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Title />

        <Footer />

      </header>
    </div>
  );
}

export default App;