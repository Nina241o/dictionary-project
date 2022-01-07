import Logo from "./img/dictionary.jpg";
import Typewriter from "./img/typewriter.jpg";
import LibraryLeft from "./img/libraryOne.jpg";
import LibraryRight from "./img/libraryTwo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="logo" className="AppLogo" />
      </header>
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img
              src={LibraryLeft}
              alt="LibraryLeft"
              className="LibraryLeft img-fluid"
            />
          </div>
          <div className="col">
            <main>
              <Dictionary />
              <img
                src={Typewriter}
                alt="typewriter"
                className="Typewriter img-fluid"
              />
            </main>
          </div>
          <div className="col">
            <img
              src={LibraryRight}
              alt="LibraryRight"
              className="LibraryRight img-fluid"
            />
          </div>
        </div>
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
