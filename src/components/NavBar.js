import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { setLoggedIn, signOutUser } from "../redux/actions/UserActions";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function NavBar() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector(state => state.UserReducer);

    const handleSignOut = () => {
        const pastDate = new Date(0); // Set the date to a past value
        document.cookie = "accessToken=; expires=" + pastDate.toUTCString() + "; path=/;";
        dispatch(setLoggedIn(false));
        dispatch(signOutUser())
        navigate("/");
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News York Times News
                    </Typography>
                    <Button onClick={handleSignOut} color="inherit">{isLoggedIn ? 'Sign Out' : ''}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
