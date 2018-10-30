import React from 'react';
import * as config from '../config';

class Person extends React.Component {
	constructor (props) {
		super(props);
		const userId = this.props.match.params.id;

		this.state = {
			user: {
				id: userId,
				first_name: '',
				last_name: '',
				age: '',
				avatar: '',
				background_url: ''
			}
		}
	}

	componentDidMount() {
		const userId = this.state.user.id;
		fetch(config.API_URL_USERS + userId, { 
	  	 	method: 'GET', 
	   		headers: new Headers ({
	     		'X-API-Key': config.X_API_KEY,
     	 		'Content-Type': 'application/json'
		   	})
	 	})
		.then((res) => res.json())
		.then(json => {
		 	this.setState({
		 		user: json
		 	});
	 	});
	}

	render() {
		console.log(this.state.user);
		return(
			<div></div>
		);
	};
}

export default Person;