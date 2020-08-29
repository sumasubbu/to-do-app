import React from "react"
import ReactDOM from "react-dom"
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function MyInfo(){
  return (
    <div>
      <h1>Suma Subbu</h1>
      <p>Hello! I'm suma and I'm learning react!</p>
      <ol>
        <li>India</li>
        <li>Japan</li>
        <li>England</li>
      </ol>
    </div>
  )
}
ReactDOM.render(<MyInfo/>,document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();