import React from 'react';
import styles from "./SidebarOption.module.css";

const SidebarOption = (props) => {

    const {Icon, title, number} = props;

    return (
        <div className={styles.sidebarOption}>
            {Icon}
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
};

export default SidebarOption;