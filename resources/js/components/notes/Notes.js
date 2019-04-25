import React, { Component } from 'react'
import NoteCard from './NoteCard'
import AddNoteButton from './AddNoteButton'

class Notes extends Component {
	constructor(props) {
		super(props)

		this.state = {
			 notes: []
		}
		this.getNotes = this.getNotes.bind(this)
		this.deleteNote = this.deleteNote.bind(this)
	}

	getNotes() {
		const token = localStorage.getItem('access_token')

		axios({
			method: 'GET',
			url: '/api/notes',
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			this.setState({
				notes: res.data
			})
		}).catch(err => {
			console.log(err.response)
		})
	}

	deleteNote(id) {
		const token = localStorage.getItem('access_token')

		axios.delete(`/api/notes/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then(res => {
			console.log('Note was deleted.')
			// also delete the Note form the state
			const removeDeletedNote = note => note.id !== id
			const updateStateAfterDelete = this.state.notes.filter(removeDeletedNote)
			this.setState({
				notes: updateStateAfterDelete
			})
		}).catch(err => {
			console.log(`Errors on delete: ${err}`)
		})
	}

	componentDidMount() {
		this.getNotes()
	}

	render() {
		const NoteCards = this.state.notes.map(note => {
			return (
				<NoteCard
					id={note.id}
					key={note.id}
					title={note.title}
					description={note.description}
					deleteNote={this.deleteNote}
				/>
			)
		}).reverse() // this reverse the order 'last note, first'

		return (
			<div className="container">
				<div className="row">

					<AddNoteButton />

					{NoteCards}

				</div>
			</div>
		)
	}
}

export default Notes
