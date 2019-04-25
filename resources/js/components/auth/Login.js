import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from '../context/AuthProvider';

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
			errors: []
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()

		const user = {
			username: this.state.username,
			password: this.state.password
		}

		this.props.login(user)
				.then(() => {
					this.setState({ errors: [] })
				}, () => this.props.history.push('/notes'))
				.catch(err => {
					const { error } = err.response.data
					this.setState({ errors: error })
				})
	}

	render() {
		const err = this.state.errors

		return (
			<div className="container">
				<div className="row justify-content-center mt-5">
					<div className="col-md-8">

						<div className="card">
							<div className="card-header">Login</div>
							<div className="card-body">

								<form method="POST" onSubmit={this.handleSubmit}>
									<div className="row form-group">
										<label htmlFor="login_email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
										<div className="col-md-6">
											<input
												id="login_email"
												type="email"
												name="username"
												className="form-control"
												value={this.state.username}
												onChange={this.handleChange}
												placeholder="Enter your email"
												autoComplete="email"
												// required
												autoFocus
											/>
										</div>
									</div>

									<div className="row form-group">
										<label htmlFor="login_password" className="col-md-4 col-form-label text-md-right">Password</label>
										<div className="col-md-6">
											<input
												id="login_password"
												type="password"
												name="password"
												className="form-control"
												value={this.state.password}
												onChange={this.handleChange}
												placeholder="Enter your password"
												autoComplete="current-password"
												// required
											/>
										</div>
									</div>

									<div className="row form-group mb-0">
										<div className="col-md-8 offset-md-4">
											<button
												type="submit"
												className="btn btn-primary"
											>Login</button>

											<Link
												to="/password/forget"
												className="btn btn-link"
											>Forgot Your Password?</Link>
										</div>

										{err && <small className="col-md-8 offset-md-4 mt-3 text-danger">{err}</small>}
									</div>

								</form>

							</div>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default withAuth(Login)
