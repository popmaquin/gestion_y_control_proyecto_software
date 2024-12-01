// Importamos express y el controlador del caso de prueba usando la sintaxis de ES6
import {Router} from 'express';
import {
  crearCasoPrueba,
  obtenerCasosPrueba,
  obtenerCasoPruebaPorId,
  actualizarCasoPrueba,
  eliminarCasoPrueba
} from '../controllers/casosPruebaController.js';

// Creamos una nueva instancia del router de Express
const router = Router();

// Definimos las rutas y asignamos los métodos del controlador correspondiente
router.post('/crear', crearCasoPrueba);
router.get('/', obtenerCasosPrueba);
router.get('/:id', obtenerCasoPruebaPorId);
router.put('/:id', actualizarCasoPrueba);
router.delete('/:id', eliminarCasoPrueba);

// Exportamos el router para que pueda ser usado en otros archivos
export default router;
