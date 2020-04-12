import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './stylesheets/App.css';
import LoginState from "./components/LoginState.js"
import LandingPage from "./components/LandingPage.js"

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/loginState" component={LoginState}/>
                </Router>
            </div>
        )
    }
}
