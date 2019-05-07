import React, { Component, createContext } from 'react'

const AuthContext = createContext()

class AuthProvider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isAuth: false,
			accessToken: localStorage.getItem('access_token') || '',
			refreshToken: localStorage.getItem('refresh_token') || ''
		}
		// this.login = this.login.bind(this)
		this.register = this.register.bind(this)
		this.logout = this.logout.bind(this)
	}

	_isMounted = false

	componentDidMount() {
			this._isMounted = true
	}
	componentWillUnmount() {
			this._isMounted = false
	}

	/**
	* Using arrow func's allow us to not
	* bind the same func in the constructor.
	* Requires Babel proposal class package.
	*
	*/
	login = (user) => {
		return axios.post('/api/login', user)
			.then(response => {
				localStorage.setItem('access_token', response.data.access_token)
				localStorage.setItem('refresh_token', response.data.refresh_token)

				this.setState({
					accessToken: response.data.access_token,
					refreshToken: response.data.refresh_token,
				})

				return response
			})
	}

	register(newUser) {
		return axios.post('/api/register', newUser)
			.then(response => {
				// console.log(response.data)
				return response
			})
	}

	logout() {
		axios({
			method: 'POST',
			url: '/api/logout',
			headers: {
				Authorization: `Bearer ${this.state.accessToken}`
			}
		})
		.then(res => {
			console.log(res.data)

			localStorage.clear()

			this.setState({
				accessToken: '',
				refreshToken: '',
			})
		})
		.catch(err => {
			console.log(err.response)
		})
	}

	/**
	* Passing the "state" and all the methods
	* with context.
	*
	*/
	render() {
		return (
			<AuthContext.Provider value={{
				...this.state,
				login: this.login,
				register: this.register,
				logout: this.logout
			}}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}

export default AuthProvider

/**
* Creating and exporting HOC so we can augment
* components with the context consumer.
*
*/
export const withAuth = Component => {
	return props => {
		return (
			<AuthContext.Consumer>
				{(auth) => {
					return (
						<Component {...props} {...auth} />
					)
				}}
			</AuthContext.Consumer>
		)
	}
}
