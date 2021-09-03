const express = require('express');
const dinoController = require('../controllers/dinoController');

const router = express.Router();

router.get('/', dinoController.dino_index);

module.exports = router;