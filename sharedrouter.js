const express = require('express')
const cors = require('cors')
const controller = require('./controller/controller')

const options = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Authorization"],
    credentials: true,
    origin: '*',
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    preflightContinue: false
};

var router = express.Router();
router.use(cors(options));
router.use(express.json());
router.use(express.urlencoded({ extended: true }))
router.options("*", cors(options));

router.get('/price', controller.getPriceData);

module.exports = router;
