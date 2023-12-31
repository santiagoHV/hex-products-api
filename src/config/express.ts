import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import { configureRouters } from './routes';

function configureApp(app: express.Application) {

    app.use(morgan('dev')); // Middleware para registrar las solicitudes en la consola (solo para desarrollo)
    app.use(cors()); // Middleware para habilitar CORS (Cross-Origin Resource Sharing)
    app.use(bodyParser.json()); // Middleware para analizar solicitudes con formato JSON

    configureRouters(app);
    app.get('/', (req, res) => {
        res.send('Hello World!')
        })
    return app;
}

export default configureApp;