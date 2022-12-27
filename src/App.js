import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
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
