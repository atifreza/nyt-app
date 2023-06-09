import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import { makeStyles } from "@material-ui/core/styles";
import CommentsModal from './CommentsModal';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
        height: 600
    },
    media: {
        height: 300
    },
});

const Article = ({ article }) => {
    const [showComments, setShowComments] = useState(false)
    const classes = useStyles();

    const showArticleComments = () => {
        setShowComments(true)
    }
    return (
        <div className={classes.root} >
            {article && (
                <Card className={classes.card} id={article._id} data-testid={article._id}>
                    <CardMedia className={classes.media} component="img"
                        src={article?.multimedia?.[0]?.url ?
                            `https://nytimes.com/${article?.multimedia[0]?.url}` :
                            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                        } alt="news-img" />
                    <CardContent>
                        <Typography color="primary" variant="h6">
                            <a href={article?.web_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                {article?.headline?.main}</a>
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle2">
                            {article?.byline?.original}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {article?.snippet}
                        </Typography>
                    </CardContent>
                    <Typography color="primary" variant="h6">
                    <ModeCommentIcon /><a className='show-somment' onClick={() => showArticleComments()} style={{ textDecoration: 'none' }}>
                        Click to see comment</a>
                    </Typography>
                    {showComments && <CommentsModal article={article} showComments={showComments} setShowComments={setShowComments}/>}
                </Card >
            )}
        </div>
    );
};

export default Article;