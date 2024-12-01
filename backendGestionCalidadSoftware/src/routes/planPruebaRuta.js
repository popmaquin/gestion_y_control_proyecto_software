
// Importamos express y el controlador del plan de prueba usando la sintaxis de ES6
import { Router } from 'express';
import {
  crearPlanPrueba,
  obtenerPlanesPrueba,
  obtenerPlanPruebaPorId,
  actualizarPlanPrueba,
  eliminarPlanPrueba
} from '../controllers/planPruebasController.js';

// Creamos una nueva instancia del router de Express
const router = Router();

// Definimos las rutas y asignamos los métodos del controlador correspondiente
router.post('/crear', crearPlanPrueba);
router.get('/', obtenerPlanesPrueba);
router.get('/:id', obtenerPlanPruebaPorId);
router.put('/:id', actualizarPlanPrueba);
router.delete('/:id', eliminarPlanPrueba);

// Exportamos el router para que pueda ser usado en otros archivos
export default router;
