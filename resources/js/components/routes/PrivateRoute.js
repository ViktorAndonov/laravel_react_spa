import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<UserContext.Consumer>
			{(context) => (
				<Route {...rest} render={(props) => (
					context.isAuthenticated === true
					? <Component {...props} />
					: <Redirect to={{
						pathname: '/login',
						state: { from: props.location }
					}} />
				)} />
			)}
		</UserContext.Consumer>
	)
}

export default PrivateRoute
