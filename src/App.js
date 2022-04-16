import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        {Array.from(Array(64)).map((_, index) => (
          <Card key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
