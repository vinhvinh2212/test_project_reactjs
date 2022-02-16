import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import AuthService from 'services/AuthService';

import { Container, Card } from 'react-bootstrap';

const Dashboard = props => {
	return (
		<div className="auth">
			<Container>
                <Card body className="p-4">
                    {props.children}
                </Card>
			</Container>
		</div>
	);
}

const DashboardLayout = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest} render={props => (
			AuthService.isAuthenticated() ? (
				<Dashboard name={rest.name}>
					<Component {...props} />
				</Dashboard>
			) : (
				<Redirect to="/login" />
			)
		)} />
	);
}

export default DashboardLayout;