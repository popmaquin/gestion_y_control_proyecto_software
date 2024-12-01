import { getAllDefectos, getDefectoById, createDefecto, updateDefecto } from '../models/defecto.js';
import { getEjecucionById } from '../models/ejecucionPrueba.js'; // Para validar relaciones

/**
 * Controlador para obtener todos los defectos.
 */
export const obtenerDefectos = async (req, res) => {
    try {
        const defectos = await getAllDefectos();
        res.status(200).json(defectos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los defectos' });
    }
};

/**
 * Controlador para obtener un defecto por ID.
 */
export const obtenerDefectoPorId = async (req, res) => {
    const { id } = req.params;

    try {
        const defecto = await getDefectoById(id);
        if (defecto) {
            res.status(200).json(defecto);
        } else {
            res.status(404).json({ error: 'Defecto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el defecto' });
    }
};

/**
 * Controlador para registrar un nuevo defecto.
 */
export const registrarDefecto = async (req, res) => {
    const data = req.body;

    try {
        // Validar que la ejecución de prueba exista
        const ejecucion = await getEjecucionById(data.id_ejecucion_prueba);
        if (!ejecucion) {
            return res.status(400).json({ error: 'La ejecución de prueba no existe' });
        }

        const id = await createDefecto(data);
        res.status(201).json({ message: 'Defecto registrado exitosamente', id });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el defecto' });
    }
};

/**
 * Controlador para actualizar un defecto existente.
 */
export const actualizarDefecto = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const affectedRows = await updateDefecto(id, data);
        if (affectedRows > 0) {
            res.status(200).json({ message: 'Defecto actualizado exitosamente' });
        } else {
            res.status(404).json({ error: 'Defecto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el defecto' });
    }
};
