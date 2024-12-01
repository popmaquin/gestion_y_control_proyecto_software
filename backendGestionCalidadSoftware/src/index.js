import express from 'express'
import rutaProyecto  from './routes/proyectoRuta.js'
import rutaPlanPruebas from "./routes/planPruebaRuta.js"
import rutaCasosPruebas from "./routes/casosPruebaRuta.js";
import rutaEjecucionPruebas from "./routes/ejecucionPruebaRuta.js";
import rutaDefectoPruebas from "./routes/defectosRuta.js";
import jenkinsRoutes from './routes/jenkinsRoutes.js'; // Importar rutas de Jenkins
import authRoutes from './routes/authRoutes.js';
import 'dotenv/config'


const app = express();

app.use(express.json()) // Middleware para manejar JSON en las solicitudes
                        //datis que entran convierta en objeto para javascript


app.use('/api/proyecto', rutaProyecto)
app.use('/api/planesprueba', rutaPlanPruebas)
app.use('/api/casosprueba', rutaCasosPruebas)
app.use('/api/ejecutarprueba', rutaEjecucionPruebas)
app.use('/api/defectoprueba', rutaDefectoPruebas)
app.use('/api/jenkins', jenkinsRoutes);// Rutas para gestionar Jenkins
app.use('/api/auth', authRoutes);


app.set('port', process.env.PORT || 4000 )
app.listen(app.get('port'), () =>{
  console.log(`Escuchado en el puerto, ${app.get('port')}`)
})

