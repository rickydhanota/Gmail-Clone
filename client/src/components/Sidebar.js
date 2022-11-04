import React from 'react';
import styles from "./Sidebar.module.css"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = (props) => {
    return (
        <div className= {styles.sidebar}>
            <Button startIcon={<AddIcon fontSize="large"/>} className={styles.sidebar_compose}>Compose</Button>
            <SidebarOption Icon={<InboxIcon />} title={"Inbox"} number={220} selected = {true} />
            <SidebarOption Icon={<StarOutlineIcon />} title={"Starred"} number={33} />
            <SidebarOption Icon={<AccessTimeIcon />} title={"Snoozed"} number={16} />
            <SidebarOption Icon={<LabelImportantIcon />} title={"Important"} number={12} />
            <SidebarOption Icon={<SendIcon />} title={"Sent"} number={120} />
            <SidebarOption Icon={<DraftsIcon />} title={"Drafts"} number={5} />
            <SidebarOption Icon={<ExpandMoreIcon />} title={"More"} />

            {/* <div className={styles.sidebar_footer}>
                <div className={styles.sidebar_footerIcons}>

                </div>
            </div> */}

        </div>
    );
};

export default Sidebar;