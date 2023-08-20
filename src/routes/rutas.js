const express = require('express');
const RegisterRouteController = require('../controllers/RoutesController');

const router = express.Router();

router.get('/register-routes', RegisterRouteController.routes);
router.get('/register-routes/getRoutes', RegisterRouteController.getRoutes);
router.post('/register-routes', RegisterRouteController.create);


module.exports = router;
