//importar las bibliotecas
const express = require('express');
const path = require('path');
const consolaRoutes = require('./routes/consola');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/examen',consolaRoutes);



app.listen(8080,()=>{
    console.log('Servidor en línea');
});

