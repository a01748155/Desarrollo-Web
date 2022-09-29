//importar las bibliotecas
const express = require('express');
//Traer el objeto de conexión sequelize
const sequelize = ('./utils/database');
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
sequelize.sync({force:true}) // force true normalmente solo se usa una vez y luego se quita porque se vuela todo
    .then(()=>{ // encadena cosas y genera un proceso, evitando la volatilidad de las promesas, una solución de varias
        console.log('Conexión exitosa')
        app.listen(8081,()=>{
            console.log('Servidor en línea');
        }); //puerto donde se ejecuta la aplicación y callback
    }).catch(error=>console.log(error))// si no se sincroniza y se inicia el código sí truena entonces esto nos sirve para controlarlo
    //las arrow function si no tienen atributo necesitan colocar (), si solo tienen uno entonces no es necesario colocar nada
    //y si tienen varios entonces hay que enlistarlos
    

