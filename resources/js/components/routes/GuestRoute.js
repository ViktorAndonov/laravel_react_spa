import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withAuth } from '../context/AuthProvider';

function GuestRoute(props) {
	const { component: Component, ...rest } = props

	return (
		!props.accessToken ?
			<Route {...rest} component={Component} /> :
			<Redirect to="/notes" />
	)
}

export default withAuth(GuestRoute)
