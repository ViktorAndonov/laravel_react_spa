import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from './context/UserProvider'
import { withAuth } from './context/AuthProvider';

function Navbar(props) {
	return (
		<>
			<div className="bg-primary">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">

							<nav className="navbar navbar-expand-lg navbar-dark">
								<Link to="/" className="navbar-brand">Laravel React SPA</Link>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>

								<UserContext.Consumer>
									{(user) => (
										<div className="collapse navbar-collapse" id="navbarSupportedContent">
											<ul className="navbar-nav pl-3 mr-auto">
												{(user.isAuthenticated) && (
													<li className="nav-item">
														<Link to="/notes" className="nav-link">Notes</Link>
													</li>
												)}
												<li className="nav-item active">
													<Link to="/" className="nav-link">Home</Link>
												</li>
												<li className="nav-item">
													<Link to="/about" className="nav-link">About</Link>
												</li>
												<li className="nav-item">
													<Link to="/contact" className="nav-link">Contact</Link>
												</li>
												<li className="nav-item">
													<Link to="/faq" className="nav-link">FAQ</Link>
												</li>
											</ul>

											<ul className="navbar-nav ml-auto">
												{ (user.isAuthenticated) ? (<>
												<li className="nav-item">
													<span className="nav-link disabled">{user.first_name} {user.last_name}</span>
												</li>
												<li className="nav-item"><span className="nav-link disabled">|</span></li>

												<li className="nav-item">
													<Link to="/" onClick={props.logout} className="nav-link btn btn-link">Logout</Link>
												</li>

												</>) : (<>
												<li className="nav-item mr-1">
													<Link to="/login" className="nav-link">Login</Link>
												</li>
												<li className="nav-item">
													<Link to="/register" className="btn btn-light">Sign up</Link>
												</li>
												</>)}
											</ul>
										</div>
									)}
								</UserContext.Consumer>
							</nav>

						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default withAuth(Navbar)
