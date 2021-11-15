const express = require("express");
require("dotenv").config();

//creamos el servidor
const app = express();

//Exponer el backend
const cors = require("cors");
app.use(cors());


//capturar el cuerpo de las peticiones
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//poner el servidor a escuchar
app.listen(process.env.PORT, ()=>console.log("Servidor a su servicio en el puerto ", process.env.PORT));


//configurar conexión con mongo atlas
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.anzx3.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
const option = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(uri, option)
.then(() => console.log("Base de datos conectada correctamente"))
.catch((e) => console.log("Error en la conexión " + e));

if (process.env.NODE_ENV === 'production') {app.use(express.static('../frontend/build'));}

//importar las rutas
const {product_routes} = require('./routes');
const {vending_routes} = require('./routes');
const {user_routes} = require('./routes');

//uso de las rutas
app.use('/api/v1/product', product_routes);
app.use('/api/v1/vending', vending_routes);
app.use('/api/v1/user', user_routes);
/*












*/


