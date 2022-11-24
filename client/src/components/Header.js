import React from 'react';
import styles from "./Header.module.css";
import MenuIcon from '@mui/icons-material/Menu';
import ButtonBase from '@mui/material/ButtonBase';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { logout, selectUser } from '../features/userSlice';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { auth } from './firebase';


const Header = (props) => {
    
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(logout())
        })
        .catch( err => {
            console.log(err);
        })
    }

    return (
        <div className= {styles.header}>

            <div className= {styles.header_left}>
                <ButtonBase className= {styles.buttonBase} >
                    <MenuIcon />
                </ButtonBase>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png' alt='' />
            </div>

            <div className= {styles.header_middle}>
                <SearchIcon className= {styles.searchIcon} />
                <input type={"text"} placeholder = "Search mail" />
                <ArrowDropDownIcon className= {styles.header_inputCaret} />
            </div>

            <div className= {styles.header_right}>
                <ButtonBase className= {styles.buttonBase}>
                    <AppsIcon />
                </ButtonBase>
                
                <ButtonBase className= {styles.buttonBase}>
                    <NotificationsIcon />
                </ButtonBase>
                
                <Avatar onClick = {signOut} src={user?.photoUrl} />
            </div>

        </div>
    );
};

export default Header;