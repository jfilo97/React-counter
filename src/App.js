import "./App.css";
import Heading from "./components/Heading";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text="React Counter" classValue="heading" />
      </header>
      <Counter counterInitValue={1} />
    </div>
  );
};

export default App;
