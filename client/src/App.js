import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className= {styles.app} >
      <Header />
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<EmailList />} />
          <Route path='/mail' element = {<Mail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
