'use strict';

/**
* Admin Route
* path: /admin
******************** */

const express    = require('express');
const Controller = rootRequire('src/backend/controllers/AdminController');
const router     = express.Router();

router.get('/', Controller.index.get);

module.exports = router;
