require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const hbs = require('hbs');

const Server = require('../src/models/server');

const server = new Server;

//obtener rutas
const loginRoutes = require('./routes/login');
const rutasRoutes = require('./routes/rutas');


const app = express();

// Midlewares
app.use(cors());

const port = process.env.PORT;
// const port = 8080;

// Renderisar las vistas 
app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');

//Handlebars
hbs.registerPartials(__dirname + '/views/partials', function(err){
    console.log('error ',err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'rutas'

}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.listen(port, () => console.log(`listening on http://localhost:${port}`));


app.use('/', loginRoutes);
app.use('/route', rutasRoutes);

app.get('/', (req, res) => {
    res.render('home');
});
