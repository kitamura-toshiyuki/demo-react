import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";


const App = () => (
    <React.Fragment>
        <DataProvider endpoint="/leads/api/"
                      render={data => <Table data={data}/>}/>
        <Form endpoint="/leads/api/"/>
    </React.Fragment>
);

const wrapper = document.getElementById("react");

wrapper ? ReactDOM.render(<App/>, wrapper) : null;
