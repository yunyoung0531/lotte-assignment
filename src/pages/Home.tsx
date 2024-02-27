import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { ListGroup, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

interface Card {
    id: number;
    title: string;
    content: string;
    image: string;
}
interface HomeProps {
    cardItem: Card[];
}

const Home: React.FC<HomeProps> = ({cardItem}) => {
    let navigate = useNavigate();
    const [userName, setUserName] = useState<string>('');
    let displayItem = cardItem.slice(0, 4);

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
            <div className='healthcare-header'>
                <h2 >{userName}님 취향 맞춤 건강 정보</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className='row w-100 justify-content-center'> 
                    {displayItem.map((item, index) => (
                        <div className="col-md-6 d-flex justify-content-center card-item-display" key={index}>
                            <Card style={{ width: '55%' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <ListGroup className="list-group-flush card-item-title">{item.title}</ListGroup>
                                </div>
                                <div className='card-img-container'>
                                    <Card.Img variant="top" src={item.image} className='card-item-img' />
                                </div>
                                <Card.Body>
                                    <Card.Title className='card-item-title'  style={{ fontSize: 'x-large' }}>{item.content}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button className='signup-btn'>찜하기</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className='footer'>
                <div className='footer-container'>
                    <a href="https://www.instagram.com/cazzle_official?igsh=MnZ1aTlqamFrYTY3" target="_blank" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', width: '100%' }}>
                        <div className='insta-icon'>
                            <FontAwesomeIcon icon={faInstagram} size='xl' />
                        </div>
                    </a>
                    <div style={{ marginTop: '-40px' }}>
                        <p style={{ fontWeight: 'bold' }}>롯데헬스케어 주식회사</p>
                        <p className='footer-content'>주소: 서울특별시 송파구 올림픽로 300 롯데월드타워 27층</p>
                        <p className='footer-content'>대표이사: 우웅조  |  전화: 02-3431-8105</p>
                        <p className='footer-content'>메일: lottehealthcare@lotte.net</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;