import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


const MyAppBar = () => {


    return (
    <AppBar position="static" color="primary" style={{position:"fixed",top:0,zIndex: "1",}}>
        <Toolbar variant="dense">
            <Typography variant="h5">
            <a href="/" style={{fontWeight:"bold",textDecoration: "none"}}>
                Blog
            </a>
            </Typography>
        </Toolbar>
    </AppBar>
    );

}

export default MyAppBar;
