import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import UserListRow from './UserListRow';

const UsersList = ({users, openUser}) => {
	return (
		<Fragment>
			{users.map((user) => {
				return <UserListRow key={user.id} user={user} openUser={openUser}/>
			}
			)}
		</Fragment>
	);
}

UsersList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.object)
}

export default UsersList;