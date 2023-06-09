import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        maxHeight: 200,
        overflow: "auto",
        textAlign: "center"
    },
}));

export default function CommentsModal({ article, showComments, setShowComments }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const handleClose = () => {
        setShowComments(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title" data-testid='comments-modal'>Top comments</h2>
            {article?.comments?.map((comment, id) => {
                return (
                    <div className='user-comment'>
                        <AccountCircleIcon />
                        <p key={id} id="simple-modal-description">
                            {comment?.userComment}
                        </p>
                    </div>
                )
            })}

        </div>
    );

    return (
        <div>
            <Modal
                open={showComments}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
