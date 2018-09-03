import React from "react";
import ReactDOM from "react-dom";

import ReactApp from "./react/App";
import MaterialUIApp from "./materialui/index";
import ReactAdminApp from "./reactadmin/index";

import { hot } from 'react-hot-loader';

const wrapper = document.getElementById("react");

wrapper ? ReactDOM.render(<ReactApp/>, wrapper) : null;