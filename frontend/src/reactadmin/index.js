import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const wrapper = document.getElementById("reactadmin");

wrapper ? ReactDOM.render(<App/>, wrapper) : null;
registerServiceWorker();
