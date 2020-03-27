import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { authUser } from '../../services/userApi';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';


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
        this.props.authUser(logginDetails);        
    }

    render() {
        console.log(this.props);
        if (this.props.isLoggedIn) {
            return <Redirect to='/dashboard'/>;
        }

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


function mapStateToProps(state) {
    return ({
        isLoggedIn: state.user.isLoggedIn
    });
}

function mapDispatchToProps(dispatch) {
    return {
      authUser: (logginDetails) => {
        dispatch(authUser(dispatch, logginDetails))
      }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

