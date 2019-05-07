import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { UserContext } from './context/UserProvider'
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

									<div className="collapse navbar-collapse" id="navbarSupportedContent">
										<ul className="navbar-nav pl-3 mr-auto">
											{ props.accessToken &&
												<li className="nav-item">
													<NavLink to="/notes" className="nav-link">Notes</NavLink>
												</li>
											}
											<li className="nav-item">
												<NavLink exact to="/" className="nav-link">Home</NavLink>
											</li>
											<li className="nav-item">
												<NavLink to="/about" className="nav-link">About</NavLink>
											</li>
											<li className="nav-item">
												<NavLink to="/contact" className="nav-link">Contact</NavLink>
											</li>
											<li className="nav-item">
												<NavLink to="/faq" className="nav-link">FAQ</NavLink>
											</li>
										</ul>

										<ul className="navbar-nav ml-auto">
											{ props.accessToken ?
											<>
												<li className="nav-item">
													<span className="nav-link disabled">{props.accessToken}</span>
													{/* <span className="nav-link disabled">{user.first_name} {user.last_name}</span> */}
												</li>
												<li className="nav-item"><span className="nav-link disabled">|</span></li>

												<li className="nav-item">
													<button onClick={() => props.logout()} className="nav-link btn btn-link">Logout</button>
												</li>
											</> :
											<>
												<li className="nav-item mr-1">
													<NavLink to="/login" className="nav-link">Login</NavLink>
												</li>
												<li className="nav-item">
													<NavLink to="/register" className="btn btn-light">Sign up</NavLink>
												</li>
											</>}
										</ul>
									</div>

							</nav>

						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default withAuth(Navbar)
