import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";

import {hot} from 'react-hot-loader';

const App = () => (
    <React.Fragment>
        <DataProvider endpoint="/leads/api/"
                      render={data => <Table data={data}/>}/>
        <Form endpoint="/leads/api/"/>
        <h1>aaaaaaBCDSあいうえお!じさん！！aaaa！！aaaa</h1>
        <h1>aaaaaaBCDSあいうえお!じさん！！aaaa！！あいうえお</h1>
    </React.Fragment>
);

export default hot(module)(App)
