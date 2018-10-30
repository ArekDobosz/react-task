import React from 'react';
import UsersList from './UsersList';
import * as config from '../config';
import CircularIndeterminate from './loader/CircularIndeterminate';
import { Grid, Paper } from '@material-ui/core';

const style = {
	Paper: {
		textAlign: 'center',
		padding: 20,
		margin: 10
	},
	CircularIndeterminate: {
		display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center',
	    height: '100vh',
	}
}

class PeoplePage extends React.Component {

	constructor(props) {
		super(props);

		const params = props.match.params;
		this.state = {
			users: [],
			isLoaded: false,
			openUser: (params) ? params.id : 0,
			error: false
		}
	}

	componentDidMount() {
		fetch(config.API_URL_USERS, { 
	  	 	method: 'GET', 
	   		headers: new Headers ({
	     		'X-API-Key': config.X_API_KEY,
     	 		'Content-Type': 'application/json'
		   	})
	 	})
		.then((res) => {
			if (!res.ok) {
				this.setState({
					error: true,
					isLoaded: true
				});
            	throw Error(res.statusText);
        	}
			return res.json();
		})
		.then(json => {
		 	this.setState({
		 		users: json,
		 		isLoaded: true
		 	});
	 	}).catch((error) => {
	 		this.setState({
				error: true,
				isLoaded: true
			});
	 		alert(error);
	 	});
	}

	render() {
		if (!this.state.isLoaded) {
			return <CircularIndeterminate style={style.CircularIndeterminate}/>
		} else if (this.state.error) {
			return (<h1>Error</h1>);
		} else {
			return (
				<Grid container>
					<Grid item sm>
						<Paper style={style.Paper}>
							<h1>List of users</h1>
							<UsersList users={this.state.users} openUser={this.state.openUser}/> 
						</Paper>
					</Grid>
				</Grid>
			);
		}
	}
}

export default PeoplePage;