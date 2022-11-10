import React from 'react';
import styles from "./Section.module.css";

const Section = (props) => {

    const {Icon, title, color, selected} = props;

    return (
        <div className={`${styles.section} ${selected && styles.section_selected}`} style = {{borderBottom: `3px solid ${color}`, color: `${selected && color}`}}>
            <Icon />
            <h4>{title}</h4>
        </div>
    );
};

export default Section;