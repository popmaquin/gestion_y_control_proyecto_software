import bcrypt from 'bcrypt';
import { pool } from '../configDB/BD.js';

// Registrar un nuevo usuario
export const registerUser = async (req, res) => {
  const { nombre, email, contraseña, rol } = req.body;
  try {
    const saltRounds = 10;
    const hash = await bcrypt.hash(contraseña, saltRounds);
    const [results] = await pool.execute(
      'INSERT INTO usuarios (nombre, email, contraseña, rol) VALUES (?, ?, ?, ?)',
      [nombre, email, hash, rol]
    );
    res.status(201).send('Usuario registrado exitosamente');
  } catch (err) {
    res.status(500).send(err);
  }
};

// Autenticar un usuario
export const loginUser = async (req, res) => {
  const { email, contraseña } = req.body;
  try {
    const [results] = await pool.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
    if (results.length === 0) {
      return res.status(401).send('Correo electrónico o contraseña incorrectos');
    }
    const user = results[0];
    const match = await bcrypt.compare(contraseña, user.contraseña);
    if (match) {
      res.status(200).send('Autenticación exitosa');
    } else {
      res.status(401).send('Correo electrónico o contraseña incorrectos');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
