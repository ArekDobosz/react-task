import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PeoplePage from './components/PeoplePage';

const Routes = () => {
	return ( 
		<Switch>
			<Route exact path="/" component={PeoplePage}/>
			<Route path="/user/:id" component={PeoplePage}/>
 		</Switch>
	);
};

export default Routes;