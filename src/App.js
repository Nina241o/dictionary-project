import Logo from "./img/dictionary.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} alt="logo" className="AppLogo img-fluid" />
      </header>
      Hello
    </div>
  );
}
