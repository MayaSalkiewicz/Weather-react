import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Weather-app">
        <div className="Weather-container">
          <Weather defaultCity="Paris" />
        </div>
        <span className="Sign">
          <p>
            <a href="https://github.com/MayaSalkiewicz/Weather-react">
              Open-source-code
            </a>
            , by Maja Salkiewicz
          </p>
        </span>
      </div>
    </div>
  );
}

export default App;
