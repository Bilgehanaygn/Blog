import React, { useEffect, useState } from 'react';
import { fetchSinglePost } from '../api/index';
import { ContextValue } from '../context/Context';
import types from '../actions/types';
import { useParams } from 'react-router-dom';
import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@emotion/react';


const useStyles = makeStyles(()=>({
    gridItem:{
        margin: "auto"
    },
    paper:{
        padding: useTheme().spacing(3),
        marginBottom: useTheme().spacing(8),
        
    },
    header:{
        display: "flex",
        justifyContent: "space-around",
        borderBottom:"solid",
        marginTop:20
    },
    image:{
        width: "100%",
        borderRadius: 5,
        marginTop: useTheme().spacing(3),
        marginBottom: useTheme().spacing(4)
    },
    content:{
        marginTop: useTheme().spacing(3)
    },
    date: {
        textAlign: "Right",
        fontWeight: "bold",
        paddingTop: "1.5em"
    }

}));


const PostDetails = () => {
    const classes = useStyles();
    const params = useParams();
    const [{currentArticle}, dispatch] = ContextValue();

    useEffect(()=>{
        fetchSinglePost(params.id).then((response)=>{
            
            dispatch(
                {
                    type: types.FETCH_SINGLE_POST,
                    payload: response.data
                }
            );
        });
    
    },[]);
    

    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={8} className={classes.gridItem}>
                <Paper elevation={2} style={{paddingTop: 50}} className={classes.paper}>
                    <div>
                        <div className={classes.header}>
                            <Typography variant="h4">
                                {currentArticle ? currentArticle.title : "Error: cannot read properties of undefined"}
                            </Typography>
                        </div>
                        <div className={classes.content} >
                            <img src={currentArticle ? currentArticle.image : "" } alt="Post Image" className={classes.image} />
                            <Typography variant="body1">
                                {currentArticle ? currentArticle.content : "Error: Cannot read properties of undefined"}
                            </Typography>
                            <Typography className={classes.date}>
                                {currentArticle ? currentArticle.date : "Error: Cannot read properties of undefined"}
                            </Typography>
                        </div>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default PostDetails;
