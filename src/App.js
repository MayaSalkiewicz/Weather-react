import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="Weather-container">
          <Weather />
          <div className="Sign">
            <p>
              <a href="https://github.com/MayaSalkiewicz/Weather-react">
                Open-source-code
              </a>
              , by Maja Salkiewicz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
