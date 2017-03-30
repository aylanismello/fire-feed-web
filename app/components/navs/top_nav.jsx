import React from 'react';

const TopNav = () => {
	return (
		<nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
			{/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button> */}
			<a className="navbar-brand" href="#">
				<div className="logo-container">
					<img src="../../assets/bc_small_1.png" alt="Burn Cartel"/>
				</div>
			</a>

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

				{/* <form className="form-inline mt-2 mt-md-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search"/>
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form> */}

			</div>

		</nav>

	);
};

export default TopNav;
