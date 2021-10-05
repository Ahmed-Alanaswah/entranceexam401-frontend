import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Favourite from "./component/Favourite";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginButton from "./component/LoginButton";
import Footer from "./component/Footer";
export class App extends Component {
	render() {
		const { user, isAuthenticated, isLoading } = this.props.auth0;
		return (
			<div>
				<Router>
					<Header />
					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route exact path="/">
							{isAuthenticated ? <Home /> : <LoginButton />}
						</Route>
						<Route exact path="/favourite">
							{isAuthenticated ? <Favourite /> : <LoginButton />}
						</Route>
					</Switch>
					<Footer />
				</Router>
			</div>
		);
	}
}

export default withAuth0(App);
