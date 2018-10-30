import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const style = {
	textCenter: {
		textAlign: 'center'
	}
}

class UserDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: this.props.user
		}
	}

	render() {
		return (
			<List>
				<ListItem>
					<Avatar src={this.state.user.avatar}/>
					<ListItemText primary={`${this.state.user.first_name} ${this.state.user.first_name}`} />
				</ListItem>
				<ListItem>
					<ListItemText primary={`age: ${this.state.user.age}`} style={style.textCenter}/>
				</ListItem>
			</List>
		);
	}
}

UserDetails.propTypes = {
	user: PropTypes.object.isRequired
}

export default UserDetails;