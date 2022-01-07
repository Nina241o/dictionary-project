import Logo from "./img/dictionary.jpg";
import Book from "./img/book.jpg";
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
             <Dictionary />
              <img
                src={Book}
                alt="book"
                className="Book img-fluid"
              />
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
