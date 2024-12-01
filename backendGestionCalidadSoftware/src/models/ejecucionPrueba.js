import {pool} from '../configDB/BD.js'

/**
 * Obtiene todas las ejecuciones de prueba de la base de datos.
 */
export const getAllEjecuciones = async () => {
    const [rows] = await pool.query('SELECT * FROM ejecucionPrueba');
    return rows;
};


/**
 * Obtiene una ejecución de prueba por su ID.
 * @param {number} id - ID de la ejecución de prueba.
 */
export const getEjecucionById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM ejecucionPrueba WHERE id = ?', [id]);
    return rows[0];
};

/**
 * Crea una nueva ejecución de prueba en la base de datos.
 * @param {object} data - Datos de la ejecución de prueba.
 */
export const createEjecucion = async (data) => {
    const { id_caso_prueba, fecha_ejecucion, duracion, estado, evidencia } = data;
    const [result] = await pool.execute(
        `INSERT INTO ejecucionPrueba (id_caso_prueba, fecha_ejecucion, duracion, estado, evidencia)
         VALUES (?, ?, ?, ?, ?)`,
        [id_caso_prueba, fecha_ejecucion, duracion, estado, evidencia]
    );
    return result.insertId;
};

/**
 * Actualiza una ejecución de prueba en la base de datos.
 * @param {number} id - ID de la ejecución de prueba.
 * @param {object} data - Datos a actualizar.
 */
export const updateEjecucion = async (id, data) => {
    const { estado, duracion, evidencia } = data;
    const [result] = await pool.execute(
        `UPDATE ejecucionPrueba
         SET estado = ?, duracion = ?, evidencia = ?
         WHERE id = ?`,
        [estado, duracion, evidencia, id]
    );
    return result.affectedRows;
};

