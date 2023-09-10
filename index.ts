import express from 'express'
import configureApp from './src/config/express'

const app = express();
const PORT = process.env.PORT || 3000;

configureApp(app);

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});