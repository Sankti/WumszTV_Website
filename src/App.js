import logo from './assets/Wumsz_Logo.svg';
import './App.css';

import { Title } from './components/Title/Title';
import { Footer } from './components/Footer/Footer';
import { SocialMedia } from './components/SocialMedia/SocialMedia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Title />

        <SocialMedia />

        <Footer />

      </header>
    </div>
  );
}

export default App;