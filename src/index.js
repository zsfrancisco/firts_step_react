import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css';

// Creando referenca al root

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value = { 1 } /> , divRoot);
// ReactDOM.render( <PrimeraApp saludo="Hola, soy Francisco" /> , divRoot);