import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { ListGroup, Card, Button } from 'react-bootstrap';

const Home: React.FC = () => {
    let navigate = useNavigate();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('userName');
        if (!name) {
            setUserName('');
        } else {
            setUserName(name);
        }

    }, []);    

    return (
        <>
            <div className='healthcare-title'>
                <h2 >{userName}님 취향 맞춤 건강 정보</h2>
            </div>
            
            <Card style={{ width: '18rem' }}>
            <ListGroup className="list-group-flush">상단 타이틀</ListGroup>
                <Card.Img variant="top" src="https://cdn.imweb.me/thumbnail/20231016/287f476059805.png" />
                <Card.Body>
                    <Card.Title>상품 명칭</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">찜하기 버튼</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Home;