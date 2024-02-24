import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface UserData {
    username: string;
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    let navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        setValidated(true);
    };
    

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className='signup-form'>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <h2>로그인</h2>
                                <Form.Group controlId="email">
                                    <Form.Label>이메일</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="이메일을 입력해주세요."
                                        className='signup-form-len no-outline'
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>비밀번호</Form.Label>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder='비밀번호을 입력해주세요.'
                                            className='signup-form-len no-outline'
                                        /> 
                                        <FontAwesomeIcon icon={faEye} style={{color: "#bdbdbd", marginLeft: '10px', marginBottom: '10px', cursor: 'pointer'}} />                                    
                                    </div>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group>
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    <Button type="submit"  className='signup-btn'>로그인</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignIn;
