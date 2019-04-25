import React, { Component } from 'react'
import { UserContext } from './UserProvider'

const withUser = Component => {
	return props => (
		<UserContext.Consumer>
			{context => (
				<Component {...props} toggleAuth={context.toggleAuth}/>
			)}
		</UserContext.Consumer>
	)
}

export default withUser
