import React, { useContext } from 'react'
import {Route, Routes} from 'react-router-dom';
import Start from './pages/Start';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from './pages/CaptainLogin';
import UserSignup from './pages/UserSignup';
import { UserDataContext } from './context/UserContext';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import Riding from './pages/Riding';
import 'remixicon/fonts/remixicon.css';

const App = () => {

  const ans = useContext(UserDataContext);
  console.log(ans);
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/> 
          </UserProtectWrapper>
        } />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/riding' element={<Riding/>} />
        <Route path='/captain-riding' element={<CaptainRiding/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/user/logout' element={
        <UserProtectWrapper>
          <UserLogout/> 
        </UserProtectWrapper>
        } />
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>
        } ></Route>
      </Routes>
    </div>
  )
}

export default App