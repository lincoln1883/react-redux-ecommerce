import React, { Component } from "react";
import { Link } from "react-router-dom";
class PageNotFound extends Component {
	render() {
		return (
			<>
				<div className="error-message">
					<h1>Oooops (404)!!!</h1>
					<p>Sorry, Page not found</p>

					<Link to="/" className="error-button">
						<button>Return Home</button>
					</Link>
				</div>
			</>
		);
	}
}

export default PageNotFound;
