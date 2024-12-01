import { pool } from '../configDB/BD.js';

/**
 * Obtiene todos los defectos registrados en la base de datos.
 */
export const getAllDefectos = async () => {
    const [rows] = await pool.query('SELECT * FROM defecto');
    return rows;
};

/**
 * Obtiene un defecto específico por su ID.
 * @param {number} id - ID del defecto.
 */
export const getDefectoById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM defecto WHERE id = ?', [id]);
    return rows[0];
};

/**
 * Registra un nuevo defecto en la base de datos.
 * @param {object} data - Datos del defecto.
 */
export const createDefecto = async (data) => {
    const { id_ejecucion_prueba, descripcion, asignar_a, fecha_reporte, fecha_resolucion, estado } = data;
    const [result] = await pool.execute(
        `INSERT INTO defecto (id_ejecucion_prueba, descripcion, asignar_a, fecha_reporte, fecha_resolucion, estado)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [id_ejecucion_prueba, descripcion, asignar_a, fecha_reporte, fecha_resolucion, estado]
    );
    return result.insertId;
};

/**
 * Actualiza un defecto en la base de datos.
 * @param {number} id - ID del defecto.
 * @param {object} data - Datos a actualizar.
 */
export const updateDefecto = async (id, data) => {
    const { descripcion, asignar_a, fecha_resolucion, estado } = data;
    const [result] = await pool.execute(
        `UPDATE defecto
         SET descripcion = ?, asignar_a = ?, fecha_resolucion = ?, estado = ?
         WHERE id = ?`,
        [descripcion, asignar_a, fecha_resolucion, estado, id]
    );
    return result.affectedRows;
};
