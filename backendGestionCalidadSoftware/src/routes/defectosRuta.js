import express from 'express';
import { obtenerDefectos, obtenerDefectoPorId, registrarDefecto, actualizarDefecto } from '../controllers/defectoController.js';

const router = express.Router();

/**
 * Ruta para obtener todos los defectos.
 */
router.get('/', obtenerDefectos);

/**
 * Ruta para obtener un defecto por ID.
 */
router.get('/:id', obtenerDefectoPorId);

/**
 * Ruta para registrar un nuevo defecto.
 */
router.post('/', registrarDefecto);

/**
 * Ruta para actualizar un defecto existente.
 */
router.put('/:id', actualizarDefecto);

export default router;
