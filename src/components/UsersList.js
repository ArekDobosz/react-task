import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import UserListRow from './UserListRow';

const UsersList = ({users, openUser}) => {
	return (
		<Fragment>
			{users.map((user) => {
				const newUser = {
					first_name: user.name,
					last_name: user.name,
					avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
					backgroundImage: 'https://thumbs.dreamstime.com/t/white-wood-planks-background-rustic-white-wood-planks-background-wood-texture-109733114.jpg',
					age: 32,
					id: user.id
				}
				return <UserListRow key={newUser.id} user={newUser} openUser={openUser}/>
			}
			)}
		</Fragment>
	);
}

UsersList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.object)
}

export default UsersList;