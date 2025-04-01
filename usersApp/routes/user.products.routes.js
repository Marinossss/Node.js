const express = require('express');
const router = express.Router();

const userProductsController = require('../controllers/user.product.controller');

router.get('/',  userProductsController.findAll)
router.get('/:username', userProductsController.findOne)
router.post('/', userProductsController.create)

module.exports = router;
