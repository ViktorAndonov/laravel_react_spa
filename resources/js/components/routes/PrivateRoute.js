import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withAuth } from '../context/AuthProvider';

function PrivateRoute(props) {
	const { component: Component, ...rest } = props

	return (
		localStorage.getItem('access_token') ?
			<Route {...rest} component={Component} /> :
			<Redirect to="/login" />
	)
}

export default withAuth(PrivateRoute)
