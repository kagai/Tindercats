import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainComponent from "./Components/MainComponent/Main";
import Card from "./Components/Card/card";
import Preview from "./Components/Preview/Preview";
import Home from "./Components/Home/Home";



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={MainComponent}/>
            <Route path="/details" component={Card}/>
            <Route path="/preview/:petId" component={Preview}/>
            <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}