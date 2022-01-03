import Logo from "./img/dictionary.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="logo" className="AppLogo" />
      </header>
      <div className="container">
        <main>
          <br />
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Florina Seipp</footer>
      </div>
    </div>
  );
}
