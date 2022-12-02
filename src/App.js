import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="Weather-container">
          <Weather city="Paris" />
        </div>
      </div>
    </div>
  );
}

export default App;
