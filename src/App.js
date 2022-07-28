// import logo from './logo.svg';
import "./App.css";
import Board from "./components/Board";
import {observe} from "./components/Game"

function App() {
  return (
    <div className="App">
      {observe((knightPosition) => (<Board knightPosition={knightPosition}/>))}
    </div>
  );
}

export default App;
