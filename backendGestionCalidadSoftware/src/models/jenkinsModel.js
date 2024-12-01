import axios from 'axios';

// Configuración de la URL base de Jenkins (Asegúrate de reemplazar con tu propia URL de Jenkins)
const jenkinsURL = 'http://localhost:8080'; // O la URL de tu servidor Jenkins
const jenkinsUser = 'admin'; // Usuario Jenkins
const jenkinsToken = 'token'; // Token de acceso Jenkins

// Función para crear un trabajo en Jenkins con la configuración de un repositorio de GitHub
export const crearTrabajoConRepositorio = async (nombreTrabajo, configXML, repositorioURL) => {
  const url = `${jenkinsURL}/createItem?name=${nombreTrabajo}`;
  const headers = {
    'Content-Type': 'application/xml',
    'Authorization': `Basic ${Buffer.from(`${jenkinsUser}:${jenkinsToken}`).toString('base64')}`
  };

  // Actualizamos el XML de configuración del trabajo para incluir el repositorio de GitHub
  const xmlConRepositorio = configXML.replace(
    '</scm>',
    `<scm>
        <url>${repositorioURL}</url>
      </scm></config>`
  );

  try {
    const response = await axios.post(url, xmlConRepositorio, { headers });
    return response.data; // Devuelve los detalles de la respuesta
  } catch (error) {
    throw new Error(`Error creando el trabajo en Jenkins con repositorio: ${error.message}`);
  }
};

// Función para ejecutar un trabajo en Jenkins
export const ejecutarTrabajoJenkins = async (nombreTrabajo) => {
  const url = `${jenkinsURL}/job/${nombreTrabajo}/build`;
  const headers = {
    'Authorization': `Basic ${Buffer.from(`${jenkinsUser}:${jenkinsToken}`).toString('base64')}`
  };

  try {
    const response = await axios.post(url, {}, { headers });
    return response.data; // Devuelve el estado de la ejecución
  } catch (error) {
    throw new Error(`Error ejecutando el trabajo en Jenkins: ${error.message}`);
  }
};

// Función para obtener los resultados de un build
export const obtenerResultadosBuild = async (nombreTrabajo, buildNumber) => {
  const url = `${jenkinsURL}/job/${nombreTrabajo}/${buildNumber}/api/json`;
  const headers = {
    'Authorization': `Basic ${Buffer.from(`${jenkinsUser}:${jenkinsToken}`).toString('base64')}`
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data; // Devuelve los resultados del build
  } catch (error) {
    throw new Error(`Error obteniendo los resultados del build: ${error.message}`);
  }
};
