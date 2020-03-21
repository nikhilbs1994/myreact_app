import React from 'react';
import {Form, Button } from 'react-bootstrap';
import { authUser } from '../../services/userApi';


class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userName: React.createRef(),
            password: React.createRef()
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        let logginDetails = {
            userName: this.state.userName.current.value,
            password: this.state.password.current.value
        }

        authUser(logginDetails);
        
        console.log(this.state.userName.current.value);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" ref={this.state.userName} placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={this.state.password} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        );
    }
}

export default Login;
