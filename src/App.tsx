import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <div>
      test
      <Routes>
        <Route path='/' element={<>홈</>}/>
        <Route path='/signin' element={<><SignIn /></>}/>
        <Route path='/signup' element={<><SignUp/></>}/>
        <Route path='*' element={<>찾을 수 없는 페이지입니다.</>}/>
      </Routes>
    </div>
  );
}

export default App;
