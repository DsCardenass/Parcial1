import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import userData from './user.json';

function Homepage() {
    
  return (
      <Container>
        <Container>
          <Row>
            <Col>
              <img class="imagen-perfil" src="https://picsum.photos/200/300?random=1" />
            </Col>
            <Col>
              <p><strong>UserName:</strong> {userData.username}</p>
              <p><strong>FullName:</strong> {userData.name}</p>
              <p><strong>Description:</strong> {userData.description}</p>
              <p><strong>Url:</strong> {userData.url}</p>
              <p><strong>followers:</strong> {userData.followers}</p>
              <p><strong>following:</strong> {userData.following}</p>
              <p><strong>post:</strong> {userData.post}</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=2" /></Col>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=3" /></Col>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=4" /></Col>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=5" /></Col>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=6" /></Col>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=7" /></Col>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=8" /></Col>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=9" /></Col>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=10" /></Col>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=11" /></Col>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=12" /></Col>
            <Col xs={4} sm={3}><img class="imagenes-perfil" src="https://picsum.photos/200/300?random=13" /></Col>
          </Row>
        </Container>
      </Container>
    );
}

export default Homepage;