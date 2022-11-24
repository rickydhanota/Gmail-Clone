import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import { selectUser } from './features/userSlice';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  return (
    
    <div className= {styles.app} >
      <Header />
      <div className={styles.app_body}>
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<EmailList />} />
            <Route path='/mail' element = {<Mail />} />
          </Routes>
        </BrowserRouter>
      </div>
      {sendMessageIsOpen && <SendMail /> }
    </div>
  );
}

export default App;
