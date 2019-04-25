import React, { Component } from 'react'

class Forget extends Component {
	constructor() {
		super()

		this.state = {
			email: '',
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

		const forgot = { email: this.state.email }

		axios.post('/api/forgot', forgot)
			.then(res => {
				console.log(res.data)
				this.setState({
					email: '',
					errors: null
				})
				this.props.history.push('/password/forget/send')
			})
			.catch(err => {
				const { message } = err.response.data
				this.setState({ errors: message })
			})
	}

	render() {
		const err = this.state.errors

		return (
			<div className="container">
				<div className="row justify-content-center mt-5">
					<div className="col-md-8">

						<div className="card">
							<div className="card-header">Forget Password</div>
							<div className="card-body">

								<form method="POST" onSubmit={this.handleSubmit}>

									<div className="row form-group">
										<label htmlFor="forget_email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
										<div className="col-md-6">
											<input
												id="forget_email"
												type="email"
												name="email"
												className={`form-control ${err && 'is-invalid'}`}
												value={this.state.email}
												onChange={this.handleChange}
												placeholder="Enter your email"
												autoComplete="email"
												// required
												autoFocus
											/>
											{err && <div className="invalid-feedback">{err}</div>}
										</div>
									</div>

									<div className="row form-group mb-0">
										<div className="col-md-8 offset-md-4">
											<button
												type="submit"
												className="btn btn-primary"
											>Send Password Reset Link</button>
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

export default Forget
