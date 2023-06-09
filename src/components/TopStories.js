import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from '@material-ui/core/Link';
import TopStory from './TopStory';
import SelectCategory from "./selectCategory";
import Spinner from './Spinner';
import { getTopStories } from "../redux/actions/TopStoriesActions";


const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

function TopStories() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { topStories, isLoading, category } = useSelector(state => state.TopStoriesReducer);


    useEffect(() => {
        dispatch(getTopStories(category || 'world'))
    }, [category, dispatch])


    return (
        <>
            {isLoading ?
                <Spinner /> :
                <div className='top-stories-container'>
                    <div className='select-category'>
                        <SelectCategory category={category} />
                        <div>

                            <NavLink to="/searchArticle">
                                <Link component="button" variant="body2">Go To Search Article</Link>
                            </NavLink>
                        </div>
                    </div>

                    <div className={classes.root} >
                        <Grid container spacing={3}>
                            {topStories?.map((topstory) => (
                                <Grid item xs={12} sm={3} key={topstory.url}>
                                    <TopStory topstory={topstory} />
                                </Grid>
                            ))}
                        </Grid>
                    </div></div>}
        </>
    );
}

export default TopStories;
