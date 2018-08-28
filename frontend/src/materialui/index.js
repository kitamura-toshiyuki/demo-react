import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';

const wrapper = document.getElementById("materialui");

wrapper ? ReactDOM.render(<Index/>, wrapper) : null;