import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import datos from './userData.json';

function Profile() {
  const intl = useIntl();
  const [usuario, setUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario || !nombre || !descripcion || !url) {
      setError(intl.formatMessage({ id: "completeFields" }));
      return;
    }

    datos[0].user = usuario;
    datos[0].fullName = nombre;
    datos[0].description = descripcion;
    datos[0].url = url;
    setError(intl.formatMessage({ id: "savedChanges" }));
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
            <label><FormattedMessage id="usernameLabel" /></label>
            <br />
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder={intl.formatMessage({ id: "usernamePlaceholder" })}
            />
          </div>
          <div className="form-group">
            <label><FormattedMessage id="fullNameLabel" /></label>
            <br />
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder={intl.formatMessage({ id: "fullNamePlaceholder" })}
            />
          </div>
          <div className="form-group">
            <label><FormattedMessage id="descriptionLabel" /></label>
            <br />
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder={intl.formatMessage({ id: "descriptionPlaceholder" })}
            />
          </div>
          <div className="form-group">
            <label><FormattedMessage id="urlLabel" /></label>
            <br />
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={intl.formatMessage({ id: "urlPlaceholder" })}
            />
          </div>
          <br />
          <button type="submit" className="submit-button"><FormattedMessage id="saveChangesButton" /></button>
          {error && <p className="error-message">{error}</p>}
          <br />
          <Link to="/">
            <button type="submit" className="submit-button"><FormattedMessage id="backButton" /></button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Profile;
