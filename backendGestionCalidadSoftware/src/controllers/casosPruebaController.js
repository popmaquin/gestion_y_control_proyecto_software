// Importamos el modelo CasoPrueba utilizando la sintaxis de importación de ES6
import CasoPrueba from '../models/casosPrueba.js';

// Función para crear un nuevo caso de prueba
export const crearCasoPrueba = (req, res) => {
  // Creamos un objeto nuevoCaso con los datos recibidos en la solicitud
  const nuevoCaso = {
    id_plan_prueba: req.body.id_plan_prueba,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    datos_prueba: req.body.datos_prueba,
    criterios_aceptacion: req.body.criterios_aceptacion
  };

  // Llamamos al método crear del modelo CasoPrueba
  CasoPrueba.crear(nuevoCaso, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error creando el caso de prueba' });
    } else {
      // Si se crea correctamente, enviamos una respuesta exitosa con los datos del caso de prueba
      res.status(201).send(data);
    }
  });
};

// Función para obtener todos los casos de prueba
export const obtenerCasosPrueba = (req, res) => {
  // Llamamos al método obtenerTodos del modelo CasoPrueba
  CasoPrueba.obtenerTodos((err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error obteniendo los casos de prueba' });
    } else {
      // Si se obtienen correctamente, enviamos los datos de los casos de prueba
      res.send(data);
    }
  });
};

// Función para obtener un caso de prueba por su ID
export const obtenerCasoPruebaPorId = (req, res) => {
  // Llamamos al método obtenerPorId del modelo CasoPrueba con el ID recibido en la solicitud
  CasoPrueba.obtenerPorId(req.params.id, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error obteniendo el caso de prueba' });
    } else {
      // Si se obtiene correctamente, enviamos los datos del caso de prueba
      res.send(data);
    }
  });
};

// Función para actualizar un caso de prueba por su ID
export const actualizarCasoPrueba = (req, res) => {
  // Creamos un objeto casoActualizado con los datos recibidos en la solicitud
  const casoActualizado = {
    id_plan_prueba: req.body.id_plan_prueba,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    datos_prueba: req.body.datos_prueba,
    criterios_aceptacion: req.body.criterios_aceptacion
  };

  // Llamamos al método actualizarPorId del modelo CasoPrueba con el ID y los datos actualizados
  CasoPrueba.actualizarPorId(req.params.id, casoActualizado, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error actualizando el caso de prueba' });
    } else {
      // Si se actualiza correctamente, enviamos los datos actualizados del caso de prueba
      res.send(data);
    }
  });
};

// Función para eliminar un caso de prueba por su ID
export const eliminarCasoPrueba = (req, res) => {
  // Llamamos al método eliminarPorId del modelo CasoPrueba con el ID recibido en la solicitud
  CasoPrueba.eliminarPorId(req.params.id, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error eliminando el caso de prueba' });
    } else {
      // Si se elimina correctamente, enviamos un mensaje de éxito
      res.send({ message: 'Caso de prueba eliminado con éxito' });
    }
  });
};
