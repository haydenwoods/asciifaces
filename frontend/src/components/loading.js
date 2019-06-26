import React, { Component } from 'react';

import "../styles/index.css";
import "../styles/reset.css";

class Loading extends Component {
	render() {
		console.log("loading");
		return(
			<div id="loading">
  				<div id="inner-loading">
  					LOADING...
  				</div>
			</div>
		);
	}
}

export default Loading;