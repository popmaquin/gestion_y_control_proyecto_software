
// Importamos express y el controlador del proyecto usando la sintaxis de ES6
import { Router} from 'express';
import {
  crearProyecto,
  obtenerProyectos,
  obtenerProyectoPorId,
  actualizarProyecto,
  eliminarProyecto
} from '../controllers/proyectoController.js'

// Creamos una nueva instancia del router de Express
const router = Router();

// Definimos las rutas y asignamos los métodos del controlador correspondiente
router.post('/crear', crearProyecto);
router.get('/', obtenerProyectos);
router.get('/:id', obtenerProyectoPorId);
router.put('/:id', actualizarProyecto);
router.delete('/:id', eliminarProyecto);

// Exportamos el router para que pueda ser usado en otros archivos
export default router;
