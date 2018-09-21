import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return(
			<div className="nav bg-dark text-light text-center">
			<div className="m-auto">
				<ul className="navbar-nav">
					<li className="navbar-link">
						<a className="navbar-item"><Link to='/'>Counter</Link></a>
					</li>
					<li className="navbar-link">
						<a className="navbar-items"><Link to='/bootstrap'>Bootstrap</Link></a>
					</li>
					<li className="navbar-link">
						<a className="navbar-items"><Link to='/portfolio'>Portfolio</Link></a>
					</li>
				</ul>
			</div>
			</div>
		)
	}
}