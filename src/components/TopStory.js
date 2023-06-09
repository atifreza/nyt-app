import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
        height: 450
    },
    media: {
        height: 300,
    },
});

const TopStory = ({ topstory }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            {topstory && (
                <Card className={classes.card} id={topstory.url}>
                    <CardMedia className={classes.media} component="img" src={topstory.multimedia?.[0]?.url ?
                        `https://nyt.com/${topstory.multimedia[0].url}` : 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                    } alt="news-img" />
                    <CardContent>
                        <Typography color="primary" variant="h6">
                            <a href={topstory.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                {topstory.title}</a>
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle2">
                            {topstory.byline}
                        </Typography>
                    </CardContent>
                </Card >
            )}
        </div>
    );
};

export default TopStory;