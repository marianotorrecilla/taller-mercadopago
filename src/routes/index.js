const express = require('express');
const router = express.Router();

const indexController = require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.home);

/* GET detail page */
router.get('/detail', indexController.detail);

/*redireccion back urls --- siempre se llegan por get */

router.get('/callback', indexController.callback);

/* notificaciones -----  no esta localmente para testear solo con el deployed*/
router.post('/notifications', indexController.notifications);


/* POST compra */
router.post('/comprar', indexController.comprar);

module.exports = router;
