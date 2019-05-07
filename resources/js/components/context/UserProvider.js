import React, { Component, createContext } from 'react'

const UserContext = createContext()

class UserProvider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isAuth:	false,
			firstName: '',
			lastName: '',
			email:
		}
	}


	render() {
		return (
			<UserContext.Provider value={{
				...this.state
			}}>
				{this.props.children}
			</UserContext.Provider>
		)
	}
}

export default UserProvider

/**
* Creating and exporting HOC so we can augment
* components with the context consumer.
*
*/
export const withUser = Component => {
	return props => {
		return (
			<UserContext.Consumer>
				{(auth) => {
					return (
						<Component {...auth} {...props} />
					)
				}}
			</UserContext.Consumer>
		)
	}
}
