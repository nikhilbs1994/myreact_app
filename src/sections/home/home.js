import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
import Login from '../../components/login/login';


class Home extends React.Component {
  render() {
    return (
      <Container className="vh-100 d-flex align-items-center">
        <Row>
          <Col sm={8} className="logo">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'}  alt="logo" />
          </Col>
          <Col sm={4} className="login">
            <Login />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
