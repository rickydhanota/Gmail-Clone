import React from 'react';
import styles from "./EmailRow.module.css";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import { selectMail } from '../features/mailSlice';
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';

const EmailRow = (props) => {

    const {id, title, subject, description, time} = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openMail = () => {
        dispatch(selectMail({
            id, title, subject, description, time,
        }));
        console.log(selectMail.title);
        navigate("/mail");
    }

    return (
        <div className= {styles.emailRow} onClick = {openMail}>
            
            <div className={styles.emailRow_options}>
                <Checkbox />
                <IconButton>
                    <StarOutlineOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelOutlinedIcon />
                </IconButton>
            </div>

            <h3 className={styles.emailRow_title}>
                {title}
            </h3>

            <div className={styles.emailRow_message}>
                <h4>{subject} <span className={styles.emailRow_description}>- {description}</span></h4>
            </div>

            <p className={styles.emailRow_time}>
                {time}
            </p>

        </div>
    );
};

export default EmailRow;