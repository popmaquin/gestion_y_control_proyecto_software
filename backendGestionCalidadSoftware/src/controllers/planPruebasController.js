// Importamos el modelo PlanPrueba utilizando la sintaxis de importación de ES6
import PlanPrueba from '../models/planPrueba.js';

// Función para crear un nuevo plan de prueba
export const crearPlanPrueba = (req, res) => {
  // Creamos un objeto nuevoPlan con los datos recibidos en la solicitud
  const nuevoPlan = {
    id_proyecto: req.body.id_proyecto,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    fecha_creacion: req.body.fecha_creacion
  };

  // Llamamos al método crear del modelo PlanPrueba
  PlanPrueba.crear(nuevoPlan, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error creando el plan de prueba' });
    } else {
      // Si se crea correctamente, enviamos una respuesta exitosa con los datos del plan de prueba
      res.status(201).send(data);
    }
  });
};

// Función para obtener todos los planes de prueba
export const obtenerPlanesPrueba = (req, res) => {
  // Llamamos al método obtenerTodos del modelo PlanPrueba
  PlanPrueba.obtenerTodos((err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error obteniendo los planes de prueba' });
    } else {
      // Si se obtienen correctamente, enviamos los datos de los planes de prueba
      res.send(data);
    }
  });
};

// Función para obtener un plan de prueba por su ID
export const obtenerPlanPruebaPorId = (req, res) => {
  // Llamamos al método obtenerPorId del modelo PlanPrueba con el ID recibido en la solicitud
  PlanPrueba.obtenerPorId(req.params.id, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error obteniendo el plan de prueba' });
    } else {
      // Si se obtiene correctamente, enviamos los datos del plan de prueba
      res.send(data);
    }
  });
};

// Función para actualizar un plan de prueba por su ID
export const actualizarPlanPrueba = (req, res) => {
  // Creamos un objeto planActualizado con los datos recibidos en la solicitud
  const planActualizado = {
    id_proyecto: req.body.id_proyecto,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    fecha_creacion: req.body.fecha_creacion
  };

  // Llamamos al método actualizarPorId del modelo PlanPrueba con el ID y los datos actualizados
  PlanPrueba.actualizarPorId(req.params.id, planActualizado, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error actualizando el plan de prueba' });
    } else {
      // Si se actualiza correctamente, enviamos los datos actualizados del plan de prueba
      res.send(data);
    }
  });
};

// Función para eliminar un plan de prueba por su ID
export const eliminarPlanPrueba = (req, res) => {
  // Llamamos al método eliminarPorId del modelo PlanPrueba con el ID recibido en la solicitud
  PlanPrueba.eliminarPorId(req.params.id, (err, data) => {
    if (err) {
      // Si hay un error, enviamos una respuesta de error
      res.status(500).send({ message: 'Error eliminando el plan de prueba' });
    } else {
      // Si se elimina correctamente, enviamos un mensaje de éxito
      res.send({ message: 'Plan de prueba eliminado con éxito' });
    }
  });
};
