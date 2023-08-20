const express = require('express');
const LoginController = require('../controllers/LoginController');

const router = express.Router();

router.get('/login', LoginController.login);
router.post('/login', LoginController.auth);
router.get('/login/getUsers', LoginController.getUsers);

router.put('/login/:id', LoginController.putUsers);


router.get('/register', LoginController.register);
router.post('/register', LoginController.storeUser);



module.exports = router;