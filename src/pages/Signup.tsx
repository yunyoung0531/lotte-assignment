import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface UserData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp: React.FC = () => {
    let navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    const [customDomain, setCustomDomain] = useState(false); 
    const [emailDomain, setEmailDomain] = useState('');

    const [passwordValidationMessage, setPasswordValidationMessage] = useState('');

    const [formData, setFormData] = useState<UserData>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const handleSignUpSuccess = (userData: UserData) => {
        const storedUsers = localStorage.getItem('userInfos');
        const users = storedUsers ? JSON.parse(storedUsers) : [];
    
        users.push(userData);
        localStorage.setItem('userInfos', JSON.stringify(users));
    
        console.log('회원가입 성공했습니다.', userData);
        navigate('/signin');
    };
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const form = event.currentTarget;
        if (formData.password !== formData.confirmPassword) { 
            alert('비밀번호를 다시 확인해주세요');
            return;
        }
    
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
        if (id === 'password') {
            validatePassword(value);
        }
    
        if (id === 'email') {
            const completeEmail = emailDomain ? `${value}@${emailDomain}` : value;
            setFormData(prevState => ({
                ...prevState,
                [id]: completeEmail
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [id]: value
            }));
        }
    };
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newEmailLocalPart = event.target.value;
        const newCompleteEmail = customDomain ? newEmailLocalPart : `${newEmailLocalPart}@${emailDomain}`;
        setFormData(prevState => ({
            ...prevState,
            email: newCompleteEmail
        }));
    };
    
    const handleDomainChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
        const value = event.target.value;
        const isCustomDomain = value === 'custom';
        setCustomDomain(isCustomDomain);
    
        if (!isCustomDomain) {
            setEmailDomain(value);
            const newCompleteEmail = `${formData.email.split('@')[0]}@${value}`;
            setFormData(prevState => ({
                ...prevState,
                email: newCompleteEmail
            }));
        } else {
            setEmailDomain('');
            setFormData(prevState => ({
                ...prevState,
                email: formData.email.split('@')[0]
            }));
        }
    };
    
    const handleCustomDomainChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newEmailDomain = event.target.value;
        setEmailDomain(newEmailDomain);
        const newCompleteEmail = `${formData.email.split('@')[0]}@${newEmailDomain}`;
        setFormData(prevState => ({
            ...prevState,
            email: newCompleteEmail
        }));
    };
    
    
    const validatePassword = (password: string) => {
        const lengthRegex = /.{8,}/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /\d/;
        const specialCharRegex = /[@$!%*?&]/;
    
        if (!lengthRegex.test(password)) {
            setPasswordValidationMessage("8자 이상의 비밀번호를 입력해주세요.");
            return;
        }
        if (!uppercaseRegex.test(password)) {
            setPasswordValidationMessage("영어 대문자를 포함시켜주세요.");
            return;
        }
        if (!lowercaseRegex.test(password)) {
            setPasswordValidationMessage("영어 소문자를 포함시켜주세요.");
            return;
        }
        if (!numberRegex.test(password)) {
            setPasswordValidationMessage("숫자를 포함시켜주세요.");
            return;
        }
        if (!specialCharRegex.test(password)) {
            setPasswordValidationMessage("특수 문자를 포함시켜주세요.");
            return;
        }
        // 모든 조건 만족
        setPasswordValidationMessage("안전한 비밀번호입니다.");
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
                                        className='signup-form-len no-outline wide-input-group'
                                        onChange={handleChange}
                                        // isInvalid={!formData.username}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>이메일</Form.Label>
                                    <InputGroup>
                                        <FormControl
                                            type="text"
                                            placeholder="이메일을 입력해주세요."
                                            aria-label="Email"
                                            className='signup-form-len no-outline wide-input-group email-input'
                                            value={formData.email.split('@')[0]} // 이메일 로컬 부분만 보여줌
                                            onChange={handleEmailChange}                                    
                                        />
                                        {(!customDomain || customDomain )&& (
                                            <InputGroup.Text style={{ height: '50px' }}>@</InputGroup.Text>
                                        )}
                                        {!customDomain ? (
                                            <Form.Select
                                                aria-label="Email domain select"
                                                onChange={handleDomainChange}
                                                className='no-outline'
                                                style={{ height: '50px', width: '135px' }}
                                            >
                                                <option value="hanmail.net">hanmail.net</option>
                                                <option value="naver.com">naver.com</option>
                                                <option value="daum.net">daum.net</option>
                                                <option value="nate.com">nate.com</option>
                                                <option value="hotmail.com">hotmail.com</option>
                                                <option value="gmail.com">gmail.com</option>
                                                <option value="custom">직접 입력</option>

                                            </Form.Select>
                                        ) : (
                                            <FormControl
                                                type="text"
                                                placeholder="직접 입력"
                                                aria-label="Custom email domain"
                                                className=' no-outline'
                                                onChange={handleCustomDomainChange} 
                                                value={emailDomain}
                                                style={{ height: '50px', width: '135px' }}  
                                            />
                                        )}
                                    </InputGroup>

                                    <Form.Control.Feedback type="invalid">
                                        올바른 이메일 주소를 입력해주세요.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>비밀번호</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="영문대소문자·특수문자·숫자를 조합하여 8자 이상"
                                        className='signup-form-len no-outline wide-input-group'
                                        onChange={handleChange}
                                        style={{marginBottom: '0px'}}
                                    />
                                    <Form.Text className="validation-text">
                                        {passwordValidationMessage}
                                    </Form.Text>

                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="confirmPassword">
                                    <Form.Label style={{ marginTop: '5px' }}>비밀번호 확인</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="비밀번호 확인을 위해 다시 한 번 더 입력해주세요."
                                        className='signup-form-len no-outline wide-input-group'
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
                                        className='no-outline'
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