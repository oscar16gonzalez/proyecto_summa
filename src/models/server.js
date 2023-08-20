const express = require('express');
const loginRoutes = require('../routes/login');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.routes();
    }

    routes(){
        this.app.use('/', loginRoutes);
        this.app.get('/', (req, res) => {
            res.render('home');
        });
        
    }

    listen(){
        this.app.listen(this.port, () => console.log(`listening on http://localhost:${this.port}`));

    }
}

module.exports = Server;