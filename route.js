const express = require('express');

const router = express.Router();

const {doActions} = require('./controller')

//@desc Get all products from db
//@route Get /api/products
//@access Public
router.get('/', doActions);

module.exports =router;