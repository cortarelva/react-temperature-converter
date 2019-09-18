import React from "react";
import ReactDOM from "react-dom";
import Component from "../component";
import "./styles.css";

function App(){
  return(
    <Component/>
  )
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
