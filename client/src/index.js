import React from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import App from "./App";
console.log(process.env.HOST_DEV);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);
