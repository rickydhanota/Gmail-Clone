import React, {useEffect} from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import { login, selectUser } from './features/userSlice';
import Login from './components/Login';
import {useDispatch} from "react-redux";
import { auth } from './components/firebase';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      }
    })
  },[]);

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
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
      )}
    </div>
  );
}

export default App;
