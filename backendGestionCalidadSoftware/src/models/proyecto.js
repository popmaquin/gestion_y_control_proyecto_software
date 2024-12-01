// Importamos la conexión de base de datos utilizando mysql2/promise
import { pool } from '../configDB/BD.js';

class Proyecto {
  constructor(nombre, descripcion, fecha_inicio, fecha_fin, estado) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.estado = estado;
  }

  // Método para crear un nuevo proyecto en la base de datos
  static async crear(nuevoProyecto, resultado) {
    const sql = 'INSERT INTO proyecto SET ?';
    try {
      const [res] = await pool.query(sql, nuevoProyecto);
      resultado(null, { id: res.insertId, ...nuevoProyecto });
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para obtener todos los proyectos de la base de datos
  static async obtenerTodos(resultado) {
    const sql = 'SELECT * FROM proyecto';
    try {
      const [res] = await pool.query(sql);
      resultado(null, res);
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para obtener un proyecto específico por su ID
  static async obtenerPorId(id, resultado) {
    const sql = 'SELECT * FROM proyecto WHERE id = ?';
    try {
      const [res] = await pool.query(sql, [id]);
      resultado(null, res[0]);
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para actualizar un proyecto existente por su ID
  static async actualizarPorId(id, proyecto, resultado) {
    const sql = 'UPDATE proyecto SET ? WHERE id = ?';
    try {
      const [res] = await pool.query(sql, [proyecto, id]);
      resultado(null, { id: id, ...proyecto });
    } catch (err) {
      resultado(err, null);
    }
  }

  // Método para eliminar un proyecto por su ID
  static async eliminarPorId(id, resultado) {
    const sql = 'DELETE FROM proyecto WHERE id = ?';
    try {
      const [res] = await pool.query(sql, [id]);
      resultado(null, res);
    } catch (err) {
      resultado(err, null);
    }
  }
}

export default Proyecto;
