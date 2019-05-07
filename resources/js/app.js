
require('./bootstrap')
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// App
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import NotFound from './components/NotFound'

// Auth.
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Forget from './components/auth/password/Forget'
import ForgetEmailSend from './components/auth/password/ForgetEmailSend'
import Reset from './components/auth/password/Reset'

// Routes
import PrivateRoute from './components/routes/PrivateRoute'
import GuestRoute from './components/routes/GuestRoute'

// Notes
import Notes from './components/notes/Notes'
import AddNote from './components/notes/AddNote'
import EditNote from './components/notes/EditNote'

// Context
import AuthProvider from './components/context/AuthProvider'

if (document.getElementById('root')) {
	ReactDOM.render(
		<AuthProvider>
			<Router>
				<>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Welcome} />
						<GuestRoute exact path="/login" component={Login} />
						<GuestRoute exact path="/register" component={Register} />
						<GuestRoute exact path="/password/forget" component={Forget} />
						<GuestRoute exact path="/password/forget/send" component={ForgetEmailSend} />
						<GuestRoute exact path="/password/reset" component={Reset} />
						<PrivateRoute exact path="/notes" component={Notes} />
						<PrivateRoute exact path="/notes/create" component={AddNote} />
						<PrivateRoute exact path="/notes/:id/edit" component={EditNote} />
						<Route component={NotFound} />
					</Switch>
				</>
			</Router>
		</AuthProvider>,
	document.getElementById('root'))
}
