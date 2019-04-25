import React from 'react'
import { Link } from 'react-router-dom'

function NoteCard(props) {
	return (
		<div className="col-lg-3 mt-5">

			<div className="card note-card">
				<div className="card-body">
					<h3 className="card-title">{props.title}</h3>
					<p className="card-text">{props.description}</p>

					<div className="card-control">
						<hr/>
						<Link
							to={`/notes/${props.id}/edit`}
							className="card-link btn btn-sm btn-primary"
						>Edit</Link>
						<button
							onClick={() => props.deleteNote(props.id)}
							className="card-link btn btn-sm btn-secondary"
						>Delete</button>
					</div>
				</div>
			</div>

		</div>
	)
}

export default NoteCard
