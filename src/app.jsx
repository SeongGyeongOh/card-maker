import styles from './app.module.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Login from './components/login/login';
import { useState } from 'react';

function App({authService, FileInput}) {  
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <Login 
                authService={authService} />
            }
          />
          <Route path="/main" element={
            <Main 
              authService={authService}
              FileInput={FileInput}
            />}
            />  
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
