import { getAllEjecuciones, getEjecucionById, createEjecucion, updateEjecucion } from '../models/ejecucionPrueba.js';

/**
 * Controlador para obtener todas las ejecuciones de prueba.
 */
export const obtenerEjecuciones = async (req, res) => {
    try {
        const ejecuciones = await getAllEjecuciones();
        res.status(200).json(ejecuciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las ejecuciones de prueba' });
    }
};

/**
 * Controlador para obtener una ejecución de prueba por ID.
 */
export const obtenerEjecucionPorId = async (req, res) => {
    const { id } = req.params;

    try {
        const ejecucion = await getEjecucionById(id);
        if (ejecucion) {
            res.status(200).json(ejecucion);
        } else {
            res.status(404).json({ error: 'Ejecución no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la ejecución de prueba' });
    }
};

/**
 * Controlador para crear una nueva ejecución de prueba.
 */
export const crearEjecucion = async (req, res) => {
    const data = req.body;

    try {
        const id = await createEjecucion(data);
        res.status(201).json({ message: 'Ejecución creada exitosamente', id });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la ejecución de prueba' });
    }
};

/**
 * Controlador para actualizar una ejecución de prueba.
 */
export const actualizarEjecucion = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const affectedRows = await updateEjecucion(id, data);
        if (affectedRows > 0) {
            res.status(200).json({ message: 'Ejecución actualizada exitosamente' });
        } else {
            res.status(404).json({ error: 'Ejecución no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la ejecución de prueba' });
    }
};
