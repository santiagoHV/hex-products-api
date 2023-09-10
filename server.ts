import app from './src/config/express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

const PORT = process.env.PORT || 3000

app.use(morgan('dev')); // Middleware para registrar las solicitudes en la consola (solo para desarrollo)
app.use(cors()); // Middleware para habilitar CORS (Cross-Origin Resource Sharing)
app.use(bodyParser.json()); // Middleware para analizar solicitudes con formato JSON

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    })