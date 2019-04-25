import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const hasToken = localStorage.getItem('access_token')

function GuestRoute({ component: Component, ...rest }) {
	return (
		<Route {...rest} render={(props) => (
			hasToken
			? <Redirect to={{
				pathname: '/',
				state: { from: props.location }
			}} />
			: <Component {...props} />
		)} />
	)
}

export default GuestRoute
