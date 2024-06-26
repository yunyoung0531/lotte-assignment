import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface UserData {
    username: string;
    email: string;
    password: string;
}

const useAuth = () => {
    const user = localStorage.getItem('jwtToken');
    return user != null;
};

const SignIn: React.FC = () => {
    const auth = useAuth();
    let navigate = useNavigate();

    React.useEffect(() => {
        if (auth) {
            navigate('/');
        }
    }, [auth, navigate]);
    
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 

    const createMockJwtToken = (userData: UserData) => {
        const header = btoa(unescape(encodeURIComponent(JSON.stringify({ alg: "HS256", typ: "JWT" }))));
        const payload = btoa(unescape(encodeURIComponent(JSON.stringify(userData))));
        const signature = "임의의서명";
        return `${header}.${payload}.${signature}`;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    
        const storedUsers = localStorage.getItem('userInfos');
        const users = storedUsers ? JSON.parse(storedUsers) : [];
    
        const userFound = users.find((user: UserData) => user.email === email && user.password === password);
    
        if (userFound) {
            console.log('로그인 성공');
            const mockToken = createMockJwtToken(userFound);
            localStorage.setItem('jwtToken', mockToken);
            localStorage.setItem('userName', userFound.username); 
            window.dispatchEvent(new Event('storage'));

            navigate('/');
        } else {
            console.log('로그인 실패');
        }
    
        setValidated(true);
    };
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
                                        className='signup-form-len no-outline wide-input-group'
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <Form.Control.Feedback>good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>비밀번호</Form.Label>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Form.Control
                                            required
                                            type={showPassword ? "tesx" : "password"}
                                            placeholder='비밀번호을 입력해주세요.'
                                            className='signup-form-len no-outline wide-input-group'
                                            value={password}
                                            onChange={handlePasswordChange} 
                                        /> 
                                        <FontAwesomeIcon 
                                            icon={showPassword ? faEyeSlash : faEye}
                                            style={{ color: "#bdbdbd", cursor: 'pointer', marginLeft: '10px' }}
                                            onClick={togglePasswordVisibility}  size='sm'
                                        />                                    
                                    </div>
                                    <Form.Control.Feedback>good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                        className="custom-checkbox" 
                                    />
                                </Form.Group>
                                <div className='already' onClick={()=>{navigate('/signup')}}>아직 계정이 없으신가요?</div>
                                <div style={{ display: 'flex', justifyContent: 'end', marginRight: '25px' }}>
                                    <Button type="submit" className='signin-btn'>로그인</Button>
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