import React from 'react';
import styles from "./SidebarOption.module.css";

const SidebarOption = (props) => {

    const {Icon, title, number, selected} = props;

    return (
        <div className={`${styles.sidebarOption} ${selected && styles.sidebarOption_active}`}>
            <div className={styles.Icon}>{Icon}</div>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
};

export default SidebarOption;