import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Article from './Article.js';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
});

export default function Articles({ articles }) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root} >
                <Grid container spacing={3}>
                    {articles.map((article) => (
                        <Grid item xs={12} sm={3} key={article._id}>
                            <Article article={article} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}