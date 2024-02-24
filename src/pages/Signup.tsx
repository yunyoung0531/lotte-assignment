import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import * as jwt from 'jsonwebtoken-esm';

interface UserData {
    username: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState<UserData>({
        username: '',
        email: '',
        password: ''
    });

    const createMockJwtToken = (userData: UserData) => {
        const header = btoa(unescape(encodeURIComponent(JSON.stringify({ alg: "HS256", typ: "JWT" }))));
        const payload = btoa(unescape(encodeURIComponent(JSON.stringify(userData))));
        const signature = "임의의서명";
        return `${header}.${payload}.${signature}`;
    };
    
    const handleSignUpSuccess = (userData: UserData) => {
        const mockToken = createMockJwtToken(userData);
        localStorage.setItem('jwtToken', mockToken);
        console.log('회원가입 성공했습니다. 토큰은? ', mockToken);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        } 
        else {
            handleSignUpSuccess(formData);
            setValidated(true);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className='signup-form'>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group controlId="username" >
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="이름을 입력해주세요."
                                        className='signup-form-len no-outline'
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>이메일</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="이메일을 입력해주세요."
                                        className='signup-form-len no-outline'
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>비밀번호</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="비밀번호을 입력해주세요."
                                        className='signup-form-len no-outline'
                                        onChange={handleChange}
                                    />
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
                                    <Button type="submit" className='signup-btn'>회원가입</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignUp;
