import React from 'react';
import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <div className= {styles.header}>
            <h1> This is the header </h1>
        </div>
    );
};

export default Header;