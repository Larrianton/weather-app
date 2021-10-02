import React from 'react';
import './App.css';
import {Weather} from "./components/Weather/Weather";
import {Clock} from "./components/Clock/Clock";
import {Route, Switch} from "react-router-dom";
import Greetings from "./components/Greetings/Greetings";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path={"/"}
                       component={Greetings}/>
                <Route exact path={"/weather"}
                       component={Weather}/>
                <Route exact path={"/clock"}
                       component={Clock}/>
            </Switch>
        </div>

    );
}

export default App;
