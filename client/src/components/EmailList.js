import React, {useState, useEffect} from 'react';
import styles from "./EmailList.module.css";
import Checkbox from '@mui/material/Checkbox';
// import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Section from './Section';
import EmailRow from './EmailRow';
import {useNavigate} from 'react-router-dom';
import { db } from './firebase';

const EmailList = (props) => {

    const navigate = useNavigate();

    const selectedEmail = (id) => {
        // e.preventDefault();
        navigate("/mail")
    }

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        console.log(emails)
        db.collection('emails').orderBy("timestamp", "desc").onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
        }))))
        console.log(emails)
    }, [])

    return (
        <div className={styles.emailList}>
            <div className= {styles.emailList_settings}>
                <div className= {styles.emailList_settingsLeft}>
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className= {styles.emailList_settingsRight}>
                    <IconButton>
                        <KeyboardArrowLeftIcon />
                    </IconButton>

                    <IconButton>
                        <KeyboardArrowRightIcon />
                    </IconButton>

                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className= {styles.emailList_sections}>
                <Section Icon = {InboxIcon} title = {"Primary"} color = {"red"} selected />
                <Section Icon = {SellOutlinedIcon} title = {"Promotion"} color = {"green"} />
                <Section Icon = {PeopleAltOutlinedIcon} title = {"Social"} color = {"blue"} />
            </div>

            <div className={styles.emailList_list}>

                {
                    emails.map((data, id) => (
                            <EmailRow 
                                id={id}
                                key ={id}
                                title = {data.data.to}
                                subject ={data.data.subject}
                                description = {data.data.message}
                                time = {new Date(data.data.timestamp?.seconds*1000).toUTCString()}
                            />
                        )
                    )
                }

                {/* <EmailRow title = {"First Email"} subject = {"This is a test email for the Gmail Clone"} description = {"This is AWESOME!!!! Made a Gmail clone! I can't wait to show this off!"} time = {"5pm"} />
                <EmailRow title = {"Elon Musk newsletter"} subject = {"Elon Musk! Tesla! Twitter acquisition"} description = {"Tesla cars are cool!! I wonder how Elon Musk is doing now that he bought Twitter"} time = {"5:30pm"} />
                <EmailRow title = {"Hit the Gym Reminder"} subject = {"This is an email reminder"} description = {"Go to the gym and exercise today so you can make sure you're in shape for basketball"} time = {"10:30pm"} />
                <EmailRow title = {"rickdhanota@gmail.com"} subject = {"Begin planning next coding project"} description = {"This is AWESOME!!!! Made a Gmail clone! I can't wait to show this off!"} time = {"5pm"} />
                <EmailRow title = {"preetxgill@gmail.com"} subject = {"This is a test email for the Gmail Clone"} description = {"This is AWESOME!!!! Made a Gmail clone! I can't wait to show this off!"} time = {"5pm"} />
                <EmailRow title = {"rdhanota@AOL.com"} subject = {"This is a test email for the Gmail Clone"} description = {"This is AWESOME!!!! Made a Gmail clone! I can't wait to show this off!"} time = {"5pm"} />
                <EmailRow title = {"rickydhanota@hotmail.com"} subject = {"This is a test email for the Gmail Clone"} description = {"This is AWESOME!!!! Made a Gmail clone! I can't wait to show this off!"} time = {"5pm"} />
                <EmailRow title = {"rickydhanota@yahoo.com"} subject = {"This is a test email for the Gmail Clone"} description = {"This is AWESOME!!!! Made a Gmail clone! I can't wait to show this off!"} time = {"5pm"} /> */}
            </div>
        </div>
    );
};

export default EmailList;