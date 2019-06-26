import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from "./components/index.js";

import "./styles/index.css";
import "./styles/reset.css";

class App extends Component {
	componentDidMount() {
        if (sessionStorage.getItem('colour')) {
            document.body.style.backgroundColor = sessionStorage.getItem('colour');
        } else{
            document.body.style.backgroundColor =  "#000";
            sessionStorage.setItem('colour', "#000");
        }
	}

	render() {
		return (
			<Router className="router">
				<div className="router-container">
					<Switch>
						<Route exact path="/" component={ Index }/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;