import React from 'react';
import SideBar from './SideBar';
import Articles from './Articles';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@mui/material';


const useStyles = makeStyles(()=>({
    gridContaner: {
        paddingTop:50
    }
}));

const MainPage = () => {
    const classes = useStyles();


    return (
        <Grid container className={classes.gridContaner}>
            <Grid item md={2} sm={4} xs={4}>
                <SideBar/>
            </Grid>
            <Grid item md={10} sm={8} xs={8} >
                <Articles/>
            </Grid>
        </Grid>
    );
}

export default MainPage;