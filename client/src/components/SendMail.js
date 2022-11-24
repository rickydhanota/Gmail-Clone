import React from 'react';
import {useForm} from "react-hook-form"
import styles from "./SendMail.module.css";
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import { closeSendMessage } from '../features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

const SendMail = (props) => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        dispatch(closeSendMessage());
    }

    const dispatch = useDispatch();

    return (
        <div className= {styles.sendMail}>
            <div className= {styles.sendMail_header}>
                <h3>New Message</h3>
                <CloseIcon className= {styles.sendMail_close} onClick = {() => dispatch(closeSendMessage())} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name={'to'} placeholder='To' type={"email"} {...register("to", {required:true})} />
                {errors.to && (<p className= {styles.sendMail_error}>To is required!</p>) }

                <input name= {'subject'} placeholder='Subject' type={"text"} {...register("subject", {required:true})} />
                {errors.subject && (<p className= {styles.sendMail_error}>Subject is required!</p>) }

                <input name= {'message'} placeholder='Message...' type={"text"} className ={styles.sendMail_message} {...register("message", {required:true})} />
                {errors.message && (<p className= {styles.sendMail_error}>Message is required!</p>) }

                <div className= {styles.sendMail_options}>
                    <Button variant='contained' color='primary' type='submit' className= {styles.sendMail_send}>Send</Button>
                </div>
            </form>
        </div>
    );
};

export default SendMail;