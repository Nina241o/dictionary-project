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
        <footer className="App-footer">
          <a
            href="https://github.com/Nina241o/dictionary-project"
            target="_blank"
            rel="noreferrer"
            className="links"
          >
            Open-source code on Github
          </a>{" "}
          by Florina Seipp hosted on{" "}
          <a
            href="https://agitated-cori-1f815e.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="links"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
