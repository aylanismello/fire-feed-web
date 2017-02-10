import React from 'react';
import { Link } from 'react-router';

const TopNav = () => {
	return (
		<nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
			{/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button> */}
			<a className="navbar-brand" href="#">Burn Cartel</a>

			<div className="collapse navbar-collapse" id="navbarCollapse">

					{/* <ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Link</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">Disabled</a>
					</li>
				</ul> */}

				{/* <form className="form-inline mt-2 mt-md-0"> */}
					{/* <input className="form-control mr-sm-2" type="text" placeholder="Search"/> */}
					<Link
						className="btn btn-outline-success my-2 my-sm-0"
						to="/curated"
					>
						BC Selected
					</Link>
				{/* </form>  */}

			</div>

		</nav>

	);
};

export default TopNav;
