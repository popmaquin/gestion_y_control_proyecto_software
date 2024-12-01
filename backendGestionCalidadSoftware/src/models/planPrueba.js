// Importamos la conexión de base de datos utilizando mysql2/promise
import { pool } from '../configDB/BD.js';

class PlanPrueba {
  constructor(id_proyecto, nombre, descripcion, fecha_creacion) {
    this.id_proyecto = id_proyecto;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha_creacion = fecha_creacion;
  }

  // Método para crear un nuevo plan de prueba en la base de datos
  static async crear(nuevoPlan, resultado) {
    const sql = 'INSERT INTO planesprueba SET ?';
    try {
      const [res] = await pool.query(sql, nuevoPlan);
      resultado(null, { id: res.insertId, ...nuevoPlan });
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para obtener todos los planes de prueba de la base de datos
  static async obtenerTodos(resultado) {
    const sql = 'SELECT * FROM planesprueba';
    try {
      const [res] = await pool.query(sql);
      resultado(null, res);
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para obtener un plan de prueba específico por su ID
  static async obtenerPorId(id, resultado) {
    const sql = 'SELECT * FROM planesprueba WHERE id = ?';
    try {
      const [res] = await pool.query(sql, [id]);
      resultado(null, res[0]);
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para actualizar un plan de prueba existente por su ID
  static async actualizarPorId(id, plan, resultado) {
    const sql = 'UPDATE planesprueba SET ? WHERE id = ?';
    try {
      const [res] = await pool.query(sql, [plan, id]);
      resultado(null, { id: id, ...plan });
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para eliminar un plan de prueba por su ID
  static async eliminarPorId(id, resultado) {
    const sql = 'DELETE FROM planesprueba WHERE id = ?';
    try {
      const [res] = await pool.query(sql, [id]);
      resultado(null, res);
    } catch (err) {
      resultado(err, null);
    }
  }
}

export default PlanPrueba;
