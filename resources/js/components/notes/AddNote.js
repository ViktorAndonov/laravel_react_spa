import React, { Component } from 'react'

class AddNote extends Component {
	constructor(props) {
		super(props)

		this.state = {
			 title: '',
			 description: '',
			 errors: []
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleKeyDown(e) {
		delete this.state.errors[e.target.name]
	}

	handleSubmit(e) {
		e.preventDefault()

		const token = localStorage.getItem('access_token')
		const newNote = {
			title: this.state.title,
			description: this.state.description,
		}

		axios({
			method: 'POST',
			url: '/api/notes',
			data: newNote,
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			console.log(res.data)
			this.setState({
				title: '',
				description: '',
				errors: []
			})
			this.props.history.push('/notes')
		}).catch(err => {
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
							<div className="card-header">Create a Note</div>
							<div className="card-body">

								<form
									onSubmit={this.handleSubmit}
									onKeyDown={this.handleKeyDown}
								>
									<div className="form-group">
										<label htmlFor="add-note-title">Title</label>
										<input
											type="text"
											id="add-note-title"
											className={`form-control ${err.title && 'is-invalid'}`}
											name="title"
											value={this.state.title}
											onChange={this.handleChange}
											placeholder="Give title to your note"
											// required
										/>
										{err.title && <div className="invalid-feedback">{err.title}</div>}
									</div>

									<div className="form-group">
										<label htmlFor="add-note-desc">Note Description</label>
										<textarea
											rows="5"
											id="add-note-desc"
											className={`form-control ${err.description && 'is-invalid'}`}
											name="description"
											value={this.state.description}
											onChange={this.handleChange}
											placeholder="Write your note"
											// required
										/>
										{err.description && <div className="invalid-feedback">{err.description}</div>}
									</div>

									<button
										type="submit"
										className="btn btn-lg btn-primary"
										disabled={err.title || err.description}
									>Add Note</button>
								</form>

							</div>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default AddNote
