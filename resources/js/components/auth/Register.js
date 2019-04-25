import React, { Component } from 'react'
import { withAuth } from '../context/AuthProvider';

class Register extends Component {
	constructor() {
		super()

		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			password_confirmation: '',
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

		const newUser = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password,
			password_confirmation: this.state.password_confirmation,
		}

		this.props.register(newUser)
				.then(() => this.props.history.push('/confirm-email'))
				.catch(err => {
					const { errors } = err.response.data
					this.setState({errors: errors})
				})
	}

	render() {
		const err = this.state.errors

		return (
			<div className="container">
				<div className="row justify-content-center mt-5">
					<div className="col-md-8">

						<div className="card">
							<div className="card-header">Sign up</div>
							<div className="card-body">

								<form method="POST" onSubmit={this.handleSubmit}>

									<div className="row form-group">
										<label htmlFor="register_fname" className="col-md-4 col-form-label text-md-right">First Name</label>
										<div className="col-md-6">
											<input
												id="register_fname"
												type="text"
												name="first_name"
												className={`form-control ${err.first_name && 'is-invalid'}`}
												value={this.state.first_name}
												onChange={this.handleChange}
												placeholder="Enter your first name"
												autoComplete="first-name"
												// required
												autoFocus
											/>
											{err.first_name && <div className="invalid-feedback">{err.first_name}</div>}
										</div>
									</div>

									<div className="row form-group">
										<label htmlFor="register_lname" className="col-md-4 col-form-label text-md-right">Last Name</label>
										<div className="col-md-6">
											<input
												id="register_lname"
												type="text"
												name="last_name"
												className={`form-control ${err.last_name && 'is-invalid'}`}
												value={this.state.last_name}
												onChange={this.handleChange}
												placeholder="Enter your last name"
												autoComplete="last-name"
												// required
											/>
											{err.last_name && <div className="invalid-feedback">{err.last_name}</div>}
										</div>
									</div>

									<div className="row form-group">
										<label htmlFor="register_email" className="col-md-4 col-form-label text-md-right">Email</label>
										<div className="col-md-6">
											<input
												id="register_email"
												type="email"
												name="email"
												className={`form-control ${err.email && 'is-invalid'}`}
												value={this.state.email}
												onChange={this.handleChange}
												placeholder="Enter your email"
												autoComplete="email"
												// required
											/>
											{err.email && <div className="invalid-feedback">{err.email}</div>}
										</div>
									</div>

									<div className="row form-group">
										<label htmlFor="register_password" className="col-md-4 col-form-label text-md-right">Password</label>
										<div className="col-md-6">
											<input
												id="register_password"
												type="password"
												name="password"
												className={`form-control ${err.password && 'is-invalid'}`}
												value={this.state.password}
												onChange={this.handleChange}
												placeholder="Enter a password"
												autoComplete="new-password"
												// required
											/>
											{err.password && <div className="invalid-feedback">{err.password}</div>}
										</div>
									</div>

									<div className="row form-group">
										<label htmlFor="register_password_confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>
										<div className="col-md-6">
											<input
												id="register_password_confirm"
												type="password"
												name="password_confirmation"
												className={`form-control ${err.password && 'is-invalid'}`}
												value={this.state.password_confirmation}
												onChange={this.handleChange}
												placeholder="Re-enter your password"
												autoComplete="confirm-new-password"
												// required
											/>
										</div>
									</div>

									<div className="row form-group mb-0">
										<div className="col-md-8 offset-md-4">
											<button
												type="submit"
												className="btn btn-primary"
											>Sign up</button>
										</div>
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

export default withAuth(Register)
