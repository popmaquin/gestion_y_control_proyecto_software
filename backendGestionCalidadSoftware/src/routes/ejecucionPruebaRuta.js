import {Router} from 'express';
import { obtenerEjecuciones, obtenerEjecucionPorId, crearEjecucion, actualizarEjecucion } from '../controllers/ejecucionPruebaController.js';

const router = Router();

/**
 * Ruta para obtener todas las ejecuciones de prueba.
 */
router.get('/', obtenerEjecuciones);

/**
 * Ruta para obtener una ejecución de prueba por ID.
 */
router.get('/:id', obtenerEjecucionPorId);

/**
 * Ruta para crear una nueva ejecución de prueba.
 */
router.post('/', crearEjecucion);

/**
 * Ruta para actualizar una ejecución de prueba.
 */
router.put('/:id', actualizarEjecucion);

export default router;
