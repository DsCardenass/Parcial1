import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import userData from './userData.json';
import { Link } from 'react-router-dom';

function Homepage(props) {
  const [uData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(userData);
  }, []);

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  return (
    <div class="background">
      <Container>
        <Container style={{ marginBottom: '24px' }}>
          <Row className="align-items-center">
            <Col xs="auto">
              <Link to="/profile">
                <img
                  className="imagen-perfil"
                  src="https://picsum.photos/350/350?random=1"
                  alt="Profile"
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            </Col>
            <Col>
              <div>
                {uData ? (
                  <div>
                    <p className="mb-0 usuario"><strong>{uData[0].user}</strong></p>
                    <p className="mb-0"><strong>{uData[0].fullName}</strong></p>
                    <p className="mb-0">{uData[0].description}</p>
                    <p className="mb-0"><strong>URL:</strong> <a href={uData[0].url}>{uData[0].url}</a></p>
                    <p className="mb-0"><strong>{uData[0].posts}</strong> POSTS - <strong>{uData[0].followers}</strong> FOLLOWERS - <strong>{uData[0].following}</strong> FOLLOWING</p>
                  </div>
                ) : (
                  <p>Loading user data...</p>
                )}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="imagenes-container">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="imagen-item">
              <img
                className="imagenes-perfil"
                src={`https://picsum.photos/1280/720?random=${index + 2}`}
                alt={`Image ${index}`}
                onClick={() => setImagenSeleccionada(`https://picsum.photos/1280/720?random=${index + 2}`)}
              />
            </div>
          ))}
          {imagenSeleccionada && (
            <div className="imagen-grande-overlay" onClick={() => setImagenSeleccionada(null)}>
              <img src={imagenSeleccionada} alt="Imagen grande" className="imagen-grande" />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}


export default Homepage;
