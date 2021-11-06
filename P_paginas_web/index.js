const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mime = require('mime');


//creamos la instancia de express
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));


//funcion que creara las cabeceras para los archivos estaticos
const setHeadersOnStatc = (res,path,stat)=>{
    const type = mime.getType(path);
    res.set('content-type',type);
}

//creamos el objeto con las opciones para archivos estaticos
const staticOptions = {
    setHeaders: setHeadersOnStatc
}
//usamos las opciones en el metodo static
app.use(express.static(path.join(__dirname,'/'),staticOptions));
// cambiamos el direcotrio views para poder visualizar las demas paginas
app.set('views', path.resolve(__dirname+"/Frontend/HTML"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//iniciar el server est
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App iniciado en ${PORT}`));

app.get('/', (req, res)=>{
res.sendFile(path.resolve(__dirname+"/Frontend/HTML/loginvista.html"))
} );

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname+"/Frontend/HTML/loginvista.html"))
    } );

//rutas
app.use(require('./Backend/routes/routes'));
app.use(require('./Backend/routes/routesActivity'));
app.use(require('./Backend/routes/routesAlum'));

