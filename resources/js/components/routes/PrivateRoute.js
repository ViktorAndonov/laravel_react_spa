import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { withAuth } from '../context/AuthProvider';

function PrivateRoute(props) {
	const { component: Component, ...rest } = props

	return (
		props.accessToken ?
			<Route {...rest} component={Component} /> :
			<Redirect to="/login" />
	)
}

export default withAuth(withRouter(PrivateRoute))
