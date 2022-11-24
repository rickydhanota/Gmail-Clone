import React from 'react';
import styles from "./Mail.module.css";
import {useNavigate} from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteIcon from '@mui/icons-material/Delete';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {useSelector} from "react-redux";
import { selectOpenMail } from '../features/mailSlice';

const Mail = (props) => {

    const navigate = useNavigate();
    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className={styles.mail}>
            <div className= {styles.mail_tools}>
                <div className={styles.mail_toolsLeft}>
                    <IconButton onClick={() => navigate("/")}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ReportGmailerrorredIcon />
                    </IconButton>
                    
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <MarkunreadIcon />
                    </IconButton>

                    <IconButton>
                        <AddTaskIcon/>
                    </IconButton>

                    <IconButton>
                        <DriveFileMoveIcon/>
                    </IconButton>

                    <IconButton>
                        <LabelOutlinedIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>

                <div className={styles.mail_toolsRight}>
                    <IconButton>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <OpenInNewIcon />
                    </IconButton>
                </div>
            </div>

            <div className={styles.mail_body}>
                <div className={styles.mail_bodyHeader}>
                    <h2>{selectedMail?.subject}</h2>
                    <LabelOutlinedIcon className={styles.mail_important} />
                    <p>{selectedMail?.title}</p>
                    <p className={styles.mail_time}>{selectedMail?.time}</p>
                </div>

                <div className={styles.mail_message}>
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Mail;