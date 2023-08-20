const { response } = require('express');
const bcrypt = require('bcrypt');

function routes(req, res) {
    res.render('register-routes/register-routes');
}

function getRoutes(req, res = response) {
    console.log("entro");

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ruta ', (err, rows) => {
            res.render('/register-routes/listRoutes', {
                data: rows
            });
            // res.render('register-routes/register-routes', { error: 'WELCOME' });

            res.status(200).json({
                data: rows
            })
        })
    })
}


function create(req, res) {
    console.log(req.body);

    const dataRoutes = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO ruta SET ?', [dataRoutes], (err, rows) => {
            // res.redirect('/');
            res.render('register-routes/register-routes', { error: 'WELCOME' });
        })
    })
}


module.exports = {
    routes,
    create,
    getRoutes

}