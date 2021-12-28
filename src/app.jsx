import styles from './app.module.css';
import { initializeApp } from "firebase/app";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Login from './components/login/login';
import { useState } from 'react';

function App({authService}) {
  const [isLogin, setIsLogin] = useState(false)

  const handleLogin = () => {
    setIsLogin(true)
  }
  
  const handleSignout = () => {
    setIsLogin(false)
  }

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <Login 
                authService={authService} 
                login={handleLogin} 
                isLogin={isLogin}/>
            }
          />
          <Route path="/main" element={<Main signout={handleSignout} isLogin={isLogin}/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
