import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

interface FormData {
    firstName: string;
    lastName: string;
    username: string;
    city: string;
    state: string;
    zip: string;
}

const Signup: React.FC = () => {
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
                                <Form.Group controlId="validationCustom01" >
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="이름을 입력해주세요."
                                        className='signup-form-len no-outline'
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="validationCustom02">
                                    <Form.Label>이메일</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="이메일을 입력해주세요."
                                        className='signup-form-len no-outline'
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="validationCustom03">
                                    <Form.Label>비밀번호</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="비밀번호을 입력해주세요."
                                        className='signup-form-len no-outline'
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

export default Signup;
