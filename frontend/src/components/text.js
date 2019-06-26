import React, { Component } from 'react';
import axios from "axios";

import Loading from "./loading.js";

import "../styles/index.css";
import "../styles/reset.css";

class Text extends Component {
	constructor(props) {
		super(props);
		this.container = React.createRef();
		this.column = React.createRef();
	}

	state = {
		face: "",
		isloading: true,
	};

	copyText(face) {
		var text = document.createElement("INPUT");
		text.value = face;
		document.body.appendChild(text);

		text.select();
		document.execCommand("copy");

		text.remove();
	}

	random() {
		axios
		.get("//localhost:3001/api/random")
		.then(res => {
			let face = res.data.payload;
			this.setState({ face: face, isloading: false });
		})
		.catch(error => this.setState({ error }));
	}

	handleSearch(event) {
		let search;
		if (event) {
            search = event.target.value;
        }

        if (Number.isInteger(parseInt(search))) {
        	search = parseInt(search);

        	axios
			.get("//localhost:3001/api/" + search)
			.then(res => {
				let face = res.data.payload;
				this.setState({ face: face, isloading: false });
			})
			.catch(error => this.setState({ error }));
        } else if (search === "") {
        	this.random();
        }
   	}

   	resizeText() {
   		var contWidth = this.container.current.offsetWidth - 200;
   		var contHeight = this.container.current.offsetHeight - 200;
   		var textWidth = this.column.current.offsetWidth;
   		var textHeight = this.column.current.offsetHeight;
   		var change = Math.min(contWidth / textWidth, contHeight / textHeight);

   		console.log(this.column);
   		this.column.current.style.transform = "scale(" + change + ")";
   	}

	componentDidMount() {
		this.random();
	}

	componentDidUpdate() {
		this.resizeText();
	}

	render() {
		return(
			<div id="text">
				{!this.state.isLoading ? (
					<div id="container" ref={this.container}>
						<div id="facetext">
					        <div id="row">
					        	<div id="column" ref={this.column}>
						        	<div id="text">
										{ this.state.face }
									</div>
								</div>
							</div>
						</div>

						<div id="toolbar">
							<div id="nav-bar">
								<div className="nav-item button" onClick={ () => this.copyText(this.state.face) }>
									<p>copy</p>
								</div>
								<div className="nav-item button" onClick={ () => this.random() }>
									<p>random</p>
								</div>

								<div id="nav-search">
									<input onChange={ this.handleSearch.bind(this) } type="text" name="search" id="search" placeholder="Search..." autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
								</div>
								<div className="nav-item right">
									<p>search</p>
								</div>
							</div>
						</div>
					</div>
			    ):(
			        <Loading/>
			    )}
			</div>
		);
	}
}

export default Text;