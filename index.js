const express = require('express');
const app = express();

const myController = require('./contronllers/myController');

/* Llamar funcion sin paraentesis para que cuando la aplicacion se lea no se ejecute,
si no que se ejecute cuando entre en al ruta */

app.get('/', myController.helloWorld);

app.listen(3000, () => {
    console.log('My first API tunning!');
})