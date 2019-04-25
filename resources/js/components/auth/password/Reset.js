import React, { Component } from 'react'

class Reset extends Component {
	constructor(props) {
		super(props)

		const params = new URLSearchParams(window.location.search)
		const reset_token = params.get('token')
		const reset_email = params.get('email')

		this.state = {
			token: reset_token,
			email: reset_email,
			password: '',
			password_confirmation: '',
			errors: null
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

		const reset_password = {
			token: this.state.token,
			email: this.state.email,
			password: this.state.password,
			password_confirmation: this.state.password_confirmation
		}

		axios.post('/api/reset', reset_password)
			.then(res => {
				this.setState({errors: null})
				this.props.history.push('/login')
			})
		.catch(err => {
			const { message } = err.response.data
			const { password } = err.response.data.errors
			this.setState({
				errors: [message, ' ', password]
			})
		})
	}

	render() {
		const err = this.state.errors

		return (
			<div className="container">
				<div className="row justify-content-center mt-5">
					<div className="col-md-8">

						<div className="card">
							<div className="card-header">Reset Password</div>
							<div className="card-body">

								<form method="POST" onSubmit={this.handleSubmit}>

									<div className="row form-group">
										<label htmlFor="reset_email" className="col-md-4 col-form-label text-md-right">Email</label>
										<div className="col-md-6">
											<input
												id="reset_email"
												type="email"
												name="email"
												className="form-control"
												value={this.state.email != null ? this.state.email : 'Check your email'}
												autoComplete="email"
												disabled
											/>
										</div>
									</div>

									<div className="row form-group">
										<label htmlFor="reset_password" className="col-md-4 col-form-label text-md-right">Password</label>
										<div className="col-md-6">
											<input
												id="reset_password"
												type="password"
												name="password"
												className={`form-control ${err && 'is-invalid'}`}
												value={this.state.password}
												onChange={this.handleChange}
												placeholder="Enter a new password"
												autoComplete="new-password"
												autoFocus
												// required
											/>
										</div>
									</div>

									<div className="row form-group">
										<label htmlFor="reset_password_confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>
										<div className="col-md-6">
											<input
												id="reset_password_confirm"
												type="password"
												name="password_confirmation"
												className={`form-control ${err && 'is-invalid'}`}
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
											>Reset Password</button>
											{err && <div className="mt-1"><small className="text-danger">{err}</small></div>}
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

export default Reset
