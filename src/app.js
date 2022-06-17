import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import anunciosRoutes from './routes/anuncios.routes';
import authRouter from './routes/auth.routes'
import propiedadRouter from './routes/propiedades.routes'
import usuarioRouter from './routes/usuario.router'

const app = express();

app.set('pkg', pkg)

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        nombre: app.get('pkg').name,
        descripcion: app.get('pkg').description,
        version: app.get('pkg').version,
    })
})


//cargar rutas
app.use('/api/anuncios', anunciosRoutes);
app.use('/api/auth', authRouter); //crea, logear y crear access-token del usuario
app.use('/api/usuario', usuarioRouter); //get usuarios
app.use('/api/propiedad', propiedadRouter);


//Exportar modulo 
export default app;

