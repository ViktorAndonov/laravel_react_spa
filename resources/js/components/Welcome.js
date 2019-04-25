import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <>
      <div className="container mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Welcome View</h1>
          <p className="lead">This is a landing page placeholder/example.</p>
          <hr className="my-4" />
          <Link to="/notes" className="btn btn-primary btn-lg">View Your Notes</Link>
        </div>
      </div>
    </>
  )
}

export default Welcome
