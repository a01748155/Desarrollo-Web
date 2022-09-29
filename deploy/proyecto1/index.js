//importar las bibliotecas
const express = require('express');
//Traer el objeto de conexión sequelize
const sequelize = require('./utils/database');
const path = require('path');
const consolaRoutes = require('./routes/consola');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/consola',consolaRoutes);



//Definición de nuestra aplicación web
// Aqui va donde se va a alojar la app y la función que regresa. La diagonal (/) indica que es el recurso que va a mostrar
// Usamos una arrow function, que son funciones anónimas
app.get('/bigote',(request,response)=>{
    console.log('Hola mundo');
    response.send('<h1>Hola mundo</h1>');
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html')); //el path une la ruta de acuerdo al sistema operativo
 }); // el método get recibe la ruta y el callback (función) pero aqui le mandamos una arrow function pero puede ser el nombre de una función


app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','pagina1.html'));
 }); 

 app.get('/tarea1',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','tarea1.html'));
 }); 


//Lanzar la aplicación

//Prueba query
app.get('/prueba1',(req,res)=>{
    console.log(req.query); // se ven todos los querys, para acceder a uno se coloca . y el número
    res.send('Datos envados por query ' + req.query.name);
});

//Prueba params
app.get('/prueba2/:name/:age',(req,res)=>{
    console.log(req.params);
    res.send('Datos enviados por params '+req.params.name);
});

app.post('/prueba3',(req,res)=>{
    console.log(req.body);
    res.send('Datos recibidos');
});

// promesas
sequelize.sync({force:true})
    .then(()=>{
        console.log('Conexión exitosa')
        app.listen(8080,()=>{
            console.log('Servidor en línea');
        }); 
    }).catch(error=>console.log(error));

