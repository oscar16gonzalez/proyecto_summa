const bcrypt = require('bcrypt');

function login(req, res) {
    res.render('login/index');
}

function getUsers(req, res) {
    console.log("entro");
    
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users ', (err, rows) => {
            // res.redirect('/');
            res.render('login/index', { error: 'WELCOME' });
            res.status(200).json({
                data: rows
            })
        })
    })
}

function auth(req, res) {
    const data = req.body;
    console.log(data);

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users WHERE email =?', [data.email], (err, userdata) => {
            if (userdata.length > 0) {
                userdata.forEach(user => {
                    bcrypt.compare(data.password, user.password, (err, isMatch) => {
                        if (!isMatch) {
                            // res.render('login/index', { error: 'Error ! incorrect password' });
                            res.status(400).json({
                                msg: 'Login failed',
                            })
                        } else {
                            // res.render('login/index', { error: 'WELCOME' });
                            res.status(200).json({
                                ok : true,
                                msg: 'Login successful',
                            })
                        }
                    });
                })
            } else {
                res.json({
                    msg: 'User no exist',
                })
                // res.render('login/index', { error: 'Error : user not exists !' });
            }
        })
    })
}

function register(req, res) {
    res.render('login/register');
}

function storeUser(req, res) {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users WHERE email =?', [data.email], (err, userdata) => {
            if (userdata.length > 0) {
                console.log("User already exists");
                res.render('login/register', { error: 'Error : user already exists !' });
            } else {
                bcrypt.hash(data.password, 12).then(hash => {
                    data.password = hash;
                    // console.log(data);
                    req.getConnection((err, conn) => {
                        conn.query('INSERT INTO users SET ?', [data], (err, rows) => {
                            res.redirect('/');
                        })
                    })
                })
            }
        })
    })
}

function putUsers(req, res) {
    console.log("LLEGO");
    const idUser = req.params.id;
    console.log(idUser);
}

module.exports = {
    login: login,
    register: register,
    storeUser: storeUser,
    auth: auth,
    getUsers: getUsers,
    putUsers: putUsers,
}