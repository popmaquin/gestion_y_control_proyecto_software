// Importamos la conexión de base de datos utilizando mysql2/promise
import { pool } from '../configDB/BD.js';

class CasoPrueba {
  constructor(id_plan_prueba, nombre, descripcion, datos_prueba, criterios_aceptacion) {
    this.id_plan_prueba = id_plan_prueba;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.datos_prueba = datos_prueba;
    this.criterios_aceptacion = criterios_aceptacion;
  }

  // Método para crear un nuevo caso de prueba en la base de datos
  static async crear(nuevoCaso, resultado) {
    const sql = 'INSERT INTO casosprueba SET ?';
    try {
      const [res] = await pool.query(sql, nuevoCaso);
      resultado(null, { id: res.insertId, ...nuevoCaso });
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para obtener todos los casos de prueba de la base de datos
  static async obtenerTodos(resultado) {
    const sql = 'SELECT * FROM casosprueba';
    try {
      const [res] = await pool.query(sql);
      resultado(null, res);
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para obtener un caso de prueba específico por su ID
  static async obtenerPorId(id, resultado) {
    const sql = 'SELECT * FROM casosprueba WHERE id = ?';
    try {
      const [res] = await pool.query(sql, [id]);
      resultado(null, res[0]);
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para actualizar un caso de prueba existente por su ID
  static async actualizarPorId(id, caso, resultado) {
    const sql = 'UPDATE casosprueba SET ? WHERE id = ?';
    try {
      const [res] = await pool.query(sql, [caso, id]);
      resultado(null, { id: id, ...caso });
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para eliminar un caso de prueba por su ID
  static async eliminarPorId(id, resultado) {
    const sql = 'DELETE FROM casosprueba WHERE id = ?';
    try {
      const [res] = await pool.query(sql, [id]);
      resultado(null, res);
    } catch (err) {
      resultado(err, null);
    }
  }
}

export default CasoPrueba;
