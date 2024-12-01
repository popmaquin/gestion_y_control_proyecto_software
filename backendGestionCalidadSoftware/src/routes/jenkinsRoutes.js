import express from 'express';
import * as JenkinsController from '../controllers/jenkinsController.js';

const router = express.Router();

// Ruta para crear un trabajo en Jenkins
router.post('/trabajo', JenkinsController.crearTrabajo);

// Ruta para crear un trabajo en Jenkins con un repositorio de GitHub
router.post('/trabajo/repositorio', JenkinsController.crearTrabajoConRepositorio);

// Ruta para ejecutar un trabajo en Jenkins
router.post('/trabajo/:nombreTrabajo/ejecutar', JenkinsController.ejecutarTrabajo);

// Ruta para obtener los resultados de un build
router.get('/trabajo/:nombreTrabajo/build/:buildNumber/resultados', JenkinsController.obtenerResultados);

export default router;
