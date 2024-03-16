import React, { useState } from 'react';
import datos from './userData.json';
import { Link } from 'react-router-dom';

function Profile() {
  const [usuario, setUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario || !nombre || !descripcion || !url) {
      setError('Complete todos los campos');
      return;
    }

    datos[0].user = usuario;
    datos[0].fullName = nombre;
    datos[0].description = descripcion;
    datos[0].url = url;
    setError('Cambios guardados');
  };

  return (
    <div className="profile-container">
      <div className='form-container'>
        <img
          className="imagen-perfil"
          src="https://picsum.photos/350/350?random=1"
          alt="Profile"
          style={{  margin: 'auto', alignItems: 'center' , display: 'block' , marginBottom: '20px'}}
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre de usuario:</label>
            <br />
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label>Nombre completo:</label>
            <br />
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre completo"
            />
          </div>
          <div className="form-group">
            <label>Descripción del perfil:</label>
            <br />
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripción del perfil"
            />
          </div>
          <div className="form-group">
            <label>URL página personal:</label>
            <br />
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="URL página personal"
            />
          </div>
          <br />
          <button type="submit" className="submit-button">Guardar Cambios</button>
          {error && <p className="error-message">{error}</p>
          }
          <br />
          <Link to="/">
            <button type="submit" className="submit-button">Volver</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Profile;
