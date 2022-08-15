import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from './App.js';
import reportWebVitals from "./reportWebVitals";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// const root = document.getElementById('root')

// observe((knightPosition) =>
//   ReactDOM.render(<Board knightPosition={knightPosition} />, root)
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import { render } from 'react-dom'
// import Example from './example'
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'

// function App() {
//   return (
//     <div className="App">
//       <DndProvider backend={HTML5Backend}>
//         <Example />
//       </DndProvider>
//     </div>
//   )
// }

// const rootElement = document.getElementById('root')
// render(<App />, rootElement)

