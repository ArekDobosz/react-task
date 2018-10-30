import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default props => 
	<AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            React app
          </Typography>
        </Toolbar>
  	</AppBar>