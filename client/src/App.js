import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className= {styles.app} >
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
