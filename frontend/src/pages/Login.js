import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
    return (<Container fluid>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <Form>
                    <Form.Group controlId="loginEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
            </Col>
        </Row>
    </Container>);
}

export default Login;