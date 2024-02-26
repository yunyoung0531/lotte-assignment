import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ProtectedRoute from './ProtectedRoute';
import cardlist from './cardlist';

interface Card {
  id: number;
  title: string;
  content: string;
  image: string;
}

const App: React.FC = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState('');
  let [cardItem, setCardItem] = useState<Card[]>(cardlist);

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
    console.log('name은? ', name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken'); 
    localStorage.removeItem('userName');
    setUserName('');
    navigate('/signin');
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const name = localStorage.getItem('userName');
      setUserName(name || '');
    };
    window.addEventListener('storage', handleStorageChange);
    handleStorageChange();
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  

  return (
    <div className='App'>
      {['sm'].map((expand) => (
        <Navbar fixed="top" className="nav-color mb-3 " key={expand} expand={expand} >
          <Container style={{ height: '75px' }}>
              <Navbar.Brand onClick={()=>{ navigate('/') }} style={{ cursor: 'pointer' }}>
              <img 
                src={'https://cdn.imweb.me/thumbnail/20240216/bd33ef80deff7.png'}
                width="155"                    
                height="50"
              />
              </Navbar.Brand>  
                {userName && <Nav className=" simple-user-info">
                  <Nav.Link>반갑습니다, {userName}님</Nav.Link>
                    <Nav.Link>걸음</Nav.Link><Nav.Link>포인트 조회</Nav.Link>
                    <Nav.Link onClick={handleLogout}>로그아웃</Nav.Link>
              </Nav>} 
          </Container>
        </Navbar>
      ))}
      
      <Routes>
        <Route path='/' element={<><ProtectedRoute><Home cardItem={cardItem}/></ProtectedRoute></>}/>
        <Route path='/signin' element={<><SignIn /></>}/>
        <Route path='/signup' element={<><SignUp/></>}/>
        <Route path='*' element={<>찾을 수 없는 페이지입니다.</>}/>
      </Routes>
    </div>
  );
}

export default App;
