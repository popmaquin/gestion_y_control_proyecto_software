import * as JenkinsModel from '../models/jenkinsModel.js';

// Función para crear un trabajo en Jenkins
export const crearTrabajo = async (req, res) => {
  const { nombreTrabajo, configXML } = req.body;

  try {
    const resultado = await JenkinsModel.crearTrabajoJenkins(nombreTrabajo, configXML);
    res.status(201).json({ message: 'Trabajo creado correctamente', data: resultado });
  } catch (error) {
    res.status(500).json({ message: 'Error creando el trabajo', error: error.message });
  }
};

// Función para crear un trabajo en Jenkins asociando un repositorio de GitHub
export const crearTrabajoConRepositorio = async (req, res) => {
  const { nombreTrabajo, configXML, repositorioURL } = req.body;

  try {
    const resultado = await JenkinsModel.crearTrabajoConRepositorio(nombreTrabajo, configXML, repositorioURL);
    res.status(201).json({ message: 'Trabajo con repositorio creado correctamente', data: resultado });
  } catch (error) {
    res.status(500).json({ message: 'Error creando el trabajo con repositorio', error: error.message });
  }
};

// Función para ejecutar un trabajo en Jenkins
export const ejecutarTrabajo = async (req, res) => {
  const { nombreTrabajo } = req.params;

  try {
    const resultado = await JenkinsModel.ejecutarTrabajoJenkins(nombreTrabajo);
    res.status(200).json({ message: 'Trabajo ejecutado correctamente', data: resultado });
  } catch (error) {
    res.status(500).json({ message: 'Error ejecutando el trabajo', error: error.message });
  }
};

// Función para obtener los resultados de un build
export const obtenerResultados = async (req, res) => {
  const { nombreTrabajo, buildNumber } = req.params;

  try {
    const resultados = await JenkinsModel.obtenerResultadosBuild(nombreTrabajo, buildNumber);
    res.status(200).json(resultados);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo los resultados', error: error.message });
  }
};
