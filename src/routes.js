import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Card from "./Components/Card/card";
import Preview from "./Components/Preview/Preview";


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Card}/>
            <Route path="/preview/:petId" component={Preview}/>
            </Switch>
        </BrowserRouter>
    );
}