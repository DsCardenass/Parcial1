import React, { useState, useEffect } from 'react';
import userData from './userData.json'; // Importar el JSON directamente

const JsonReader = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Al cargar el componente, asigna el JSON importado al estado
    setJsonData(userData);
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <div>
      <h2>Contenido del JSON:</h2>
      {jsonData ? (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default JsonReader;
