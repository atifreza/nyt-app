import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Link from '@material-ui/core/Link';
import { TextField, Button } from '@material-ui/core';
import { userLogin } from "../redux/actions/UserActions";

function Login() {
    const [userData, setUserData] = useState({});
    const [userAction, setUserAction] = useState('login');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { isLoggedIn, isRegistered } = useSelector(state => state.UserReducer);

    const handleLogin = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/topStories")
        }
    }, [isLoggedIn, navigate])

    useEffect(() => {
        if (isRegistered) {
            setUserAction("login")
            setUserData({})
        }
    }, [isRegistered])

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(userLogin(userData, userAction))
    };

    const handleRegister = () => {
        setUserAction("register")
    }

    return (
        <>
            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <TextField
                        label="Email"
                        name="email"
                        value={userData.username}
                        onChange={handleLogin}
                        margin="normal"
                        inputProps={{ "data-testid": "email" }}
                        required
                    />
                    <br />
                    <TextField
                        label="Password"
                        name="password"
                        value={userData.password}
                        onChange={handleLogin}
                        type="password"
                        margin="normal"
                        inputProps={{ "data-testid": "password" }}
                        required
                    />
                    <br />
                    <Button type="submit" variant="contained" color="primary">
                        {userAction === 'register' ? 'Register' : 'Log In'}
                    </Button>
                    <br />
                    <Link className='register' onClick={handleRegister}>
                        {userAction === 'register' ? 'Log In' : 'Register'}
                    </Link>
                </form>
            </div>
        </>
    );
};

export default Login;
