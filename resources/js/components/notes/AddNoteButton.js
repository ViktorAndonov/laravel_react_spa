import React from 'react'
import { Link } from 'react-router-dom'

function AddNoteButton() {
	return (
		<div className="col-lg-3 mt-5">

			<div className="card add-note-card">
				<div className="card-body">
					<Link
						to="/notes/create"
						className="add-note-link"
					>
						<h3 className="add-note-symbol">+</h3>
						<p>Add Note</p>
					</Link>
				</div>
			</div>

		</div>
	)
}

export default AddNoteButton
