import React from 'react';
import styles from "./Login.module.css"
import Button from '@mui/material/Button';
import { auth, provider } from './firebase';
import {useDispatch} from "react-redux";
import { login } from '../features/userSlice';

const Login = (props) => {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(user => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        })
        .catch(err => {
            console.log(err)
            alert(err)
        })
    }

    return (
        <div className= {styles.login}>
            <div className={styles.login_container}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png' alt='' />
                <Button variant ="contained" color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    );
};

export default Login;