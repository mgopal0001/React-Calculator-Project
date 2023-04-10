import './App.css';
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Calculator</h1>
      </header>
      <div className="wrapper">
        <div className="textArea">
          <input type="text" id="my-text" inputMode='none'></input>
        </div>
        <Button/>
        

      </div>
    </div>
  );
}

export default App;
