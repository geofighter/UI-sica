import React from 'react'
import ReactDOM from 'react-dom/client'
import {SicaApp} from "./SicaApp";
import './assets/stylesSica.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <SicaApp />
      </BrowserRouter>
  </React.StrictMode>
)
