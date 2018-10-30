import React from 'react';
import PropTypes from 'prop-types';
import history  from '../actions/history';
import UserDetails from './UserDetails';
import * as config from '../config';
import LinearIndeterminate from './loader/LinearIndeterminate';
import Avatar from '@material-ui/core/Avatar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const style = {
	buttonStyle: {
		width: '100%'
	},
	listStyle: {
		display: 'flex',
		justifyContent: 'center'
	},
	closeButtonStyle: {
		fontSize: 20
	},
	avatarStyle: {
		marginRight: 20
	},
	dialogTitleStyle: {
		textAlign: 'center'
	},
	dialogStyle: {
		
	}
}

class UserListRow extends React.Component {
	constructor(props) {
		super(props);

		let open = false;
		this.state = {
			user: this.props.user,
			open: open,
			isLoaded: true,
			userDetails: {},
			dialogBackground: {},
		}

		this.setUserData = this.setUserData.bind(this);
		if (this.props.user.id === parseInt(this.props.openUser)) {
			this.setUserData(this.props.user.id);
		}
	}

	setUserData(userId) {
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
		 		dialogBackground: {
		 			backgroundImage: `url(${json.background_url})`
		 		},
		 		userDetails: json,
		 		open: true,
		 		isLoaded: true
		 	});
	 	}).catch((exception) => alert(exception));
	}

 	handleClickOpen = () => {
 		history.push('/user/' + this.state.user.id);

 		this.setState({
 			isLoaded: false,
 		});

 		this.setUserData(this.state.user.id);
  	};

  	handleClose = () => {
  		history.push('/');
    	this.setState({ open: false });
  	};

	render() {
		return (
			<div>
				<List>
					<ListItem button onClick={this.handleClickOpen}>
			            <ListItemIcon>
			              	<Avatar src={this.state.user.avatar} style={style.avatarStyle}/>
			            </ListItemIcon>
			            <ListItemText inset primary={this.state.isLoaded 
			            	? `${this.state.user.first_name} ${this.state.user.last_name}` 
			            	: <LinearIndeterminate />} />
		          	</ListItem>
					
				</List>
   			 	<Dialog
		          	open={this.state.open}
		          	onClose={this.handleClose}
		          	aria-labelledby="alert-dialog-title"
		          	aria-describedby="alert-dialog-description">

          			<DialogTitle id="alert-dialog-title" style={style.dialogTitleStyle}>
          				{"User details #"+this.state.user.id}
      				</DialogTitle>
          			<DialogContent style={this.state.dialogBackground}>
            			<DialogContentText id="alert-dialog-description">
							<UserDetails user={this.state.userDetails}/>
            			</DialogContentText>
          			</DialogContent>
          			<DialogActions>
            			<Button onClick={this.handleClose} color="primary" autoFocus style={style.closeButtonStyle}>&times;</Button>
          			</DialogActions>
        		</Dialog>
	        </div>
		);
	}
};

UserListRow.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserListRow;