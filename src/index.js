import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios  from 'axios';
import App from './App';
import './index.css'

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter> , 
  document.getElementById('root')
);


