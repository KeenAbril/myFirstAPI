const express = require('express');
//Deprecated
//const bodyParser = require('body-parser')
const app = express();
require('dotenv').config();
const cors = require('cors');
const connect = require('./database/connect')

connect.createConnection();

app.use(cors());

// parse application/json
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const myController = require('./contronllers/myController');

/* Llamar funcion sin paraentesis para que cuando la aplicacion se lea no se ejecute,
si no que se ejecute cuando entre en al ruta */

app.get('/', myController.helloWorld);

app.use('/api/v1/user/', require('./routes/userRoutes'));
app.use('/api/v1/fecha/', require('./routes/fechaRoutes'));
app.use('/api/v1/tabla/', require('./routes/tablaRoutes'));
app.use('/api/v1/factorial/', require('./routes/factorialRoutes'));
app.use('/api/v1/operacion/', require('./routes/operacionRoutes'));
app.use('/api/v1/aleatorio/', require('./routes/numAleatorioRoutes'));
app.use('/api/v1/combinacion/', require('./routes/combinacionRoutes'));
app.use('/api/v1/movil/', require('./routes/movilRoutes'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`My first API running on port: ${process.env.PORT}`);
})