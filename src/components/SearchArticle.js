import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from "@material-ui/core/styles";
import { getSearchArticles } from "../redux/actions/SearchArticleActions";
import Search from "./Search"
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Spinner from './Spinner';
import Articles from "./Articles";
import Pagination from '@material-ui/lab/Pagination';
import {commentsMockData} from "../utils/CommonUtils";



const useStyles = makeStyles((theme) => ({
    buttons: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const SearchArticle = () => {
    const [searchedArticles, setSearchedArticles] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();
    const { articles, searchedArticle, searchedArticleText, pageNo } = useSelector(state => state.SearchArticleReducer);
    const { isLoading } = useSelector(state => state.TopStoriesReducer);

    useEffect(() => {
        let newArticles = JSON.parse(JSON.stringify(articles))
        // this forEach is used becuase of mockData for comments otherwise not needed if we get the data from api
        articles.forEach((element,i)=> {
            commentsMockData[i]['_id']= element._id
        });
        newArticles.forEach((newArticle,i) => {
            if(newArticle._id === commentsMockData[i]._id){
                newArticle['comments'] = commentsMockData[i]?.articleComments
            }
        })
        setSearchedArticles(newArticles);
    },[articles])

    const searchArticles = (text) => {
        dispatch(getSearchArticles(text))
    };
    const lastFiveSearchedArticles = () => {
        if (searchedArticle.length <= 5) {
            return searchedArticle;
        } else {
            return searchedArticle.slice((searchedArticle.length - 5), searchedArticle.length)
        }
    }
    const handleChange = (event, value) => {
        dispatch(getSearchArticles(searchedArticleText, value - 1, value))
    };
    return (
        <div>
            {isLoading ?
                <Spinner /> :
                <Container>
                    <Typography color="textPrimary" gutterBottom variant="h2" align="center">
                        <div className={classes.buttons}>
                            {lastFiveSearchedArticles()?.map((article, index) => {
                                return <Button key={index} onClick={() => searchArticles(article)} variant="outlined" color="primary">{article.toUpperCase()}</Button>
                            })}
                        </div>
                        <Search searchArticles={searchArticles} />
                        <NavLink to="/topstories">
                            <Link component="button" variant="body2">Go to top stories in the World</Link>
                        </NavLink>
                        {searchedArticles?.length > 0 ?
                            <>
                                <Articles articles={searchedArticles} />
                                <Pagination className='article-pagination' count={100} page={pageNo} onChange={handleChange} />
                            </>
                            : <div className='no-article'> No Articles found</div>}
                    </Typography>
                </Container>}
        </div>
    )
}

export default SearchArticle
