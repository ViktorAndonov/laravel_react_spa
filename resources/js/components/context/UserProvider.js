import React, { Component, createContext } from 'react'
import { withRouter } from "react-router-dom"

export const UserContext = createContext({
	isAuthenticated: false,
	toggleAuth: () => {}
})

class UserProvider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuthenticated: false,
			first_name: '',
			last_name: '',
			email: ''
		}
		this.toggleAuth = this.toggleAuth.bind(this)
	}

	toggleAuth() {
		this.setState(prevState => {
			return {
				isAuthenticated: !prevState.isAuthenticated
			}
		})
	}

	componentDidMount() {
		const token = localStorage.getItem('access_token')

		if (token) {
			axios({
				method: 'GET',
				url: '/api/user',
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(res => {
				console.log(res.data)
				this.setState({
					email: res.data.email,
					last_name: res.data.last_name,
					first_name: res.data.first_name,
					isAuthenticated: true
				})
			})
			.catch(err => {
				console.log(err.response)
			})
		}
	}


	render() {
		return (
			<UserContext.Provider value={{
				...this.state,
				toggleAuth: this.toggleAuth,
			}}>
				{this.props.children}
			</UserContext.Provider>
		)
	}
}

export default UserProvider
