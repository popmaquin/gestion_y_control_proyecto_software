// Importamos el modelo Proyecto utilizando la sintaxis de importación de ES6
import Proyecto from '../models/proyecto.js';

// Función para crear un nuevo proyecto
export const crearProyecto = (req, res) => {
  // Creamos un objeto nuevoProyecto con los datos recibidos en la solicitud
  const nuevoProyecto = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    fecha_inicio: req.body.fecha_inicio,
    fecha_fin: req.body.fecha_fin,
    estado: req.body.estado
  };

  // Llamamos al método crear del modelo Proyecto
  Proyecto.crear(nuevoProyecto, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error creando el proyecto' });
    } else {
      // Si se crea correctamente, enviamos una respuesta exitosa con los datos del proyecto
      res.status(201).send(data);
    }
  });
};

// Función para obtener todos los proyectos
export const obtenerProyectos = (req, res) => {
  // Llamamos al método obtenerTodos del modelo Proyecto
  Proyecto.obtenerTodos((err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error obteniendo los proyectos' });
    } else {
      // Si se obtienen correctamente, enviamos los datos de los proyectos
      res.send(data);
    }
  });
};

// Función para obtener un proyecto por su ID
export const obtenerProyectoPorId = (req, res) => {
  // Llamamos al método obtenerPorId del modelo Proyecto con el ID recibido en la solicitud
  Proyecto.obtenerPorId(req.params.id, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error obteniendo el proyecto' });
    } else {
      // Si se obtiene correctamente, enviamos los datos del proyecto
      res.send(data);
    }
  });
};

// Función para actualizar un proyecto por su ID
export const actualizarProyecto = (req, res) => {
  // Creamos un objeto proyectoActualizado con los datos recibidos en la solicitud
  const proyectoActualizado = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    fecha_inicio: req.body.fecha_inicio,
    fecha_fin: req.body.fecha_fin,
    estado: req.body.estado
  };

  // Llamamos al método actualizarPorId del modelo Proyecto con el ID y los datos actualizados
  Proyecto.actualizarPorId(req.params.id, proyectoActualizado, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error actualizando el proyecto' });
    } else {
      // Si se actualiza correctamente, enviamos los datos actualizados del proyecto
      res.send(data);
    }
  });
};

// Función para eliminar un proyecto por su ID
export const eliminarProyecto = (req, res) => {
  // Llamamos al método eliminarPorId del modelo Proyecto con el ID recibido en la solicitud
  Proyecto.eliminarPorId(req.params.id, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error eliminando el proyecto' });
    } else {
      // Si se elimina correctamente, enviamos un mensaje de éxito
      res.send({ message: 'Proyecto eliminado con éxito' });
    }
  });
};

