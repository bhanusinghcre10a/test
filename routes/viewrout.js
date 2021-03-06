const express = require('express');
const router = express.Router();
const authcontroller = require('./../controller/authcontroller');
const viewcontroller = require('./../controller/viewcontroller');

router.get('/', viewcontroller.home);
router.get('/home', viewcontroller.home);
router.get('/login', viewcontroller.login);
router.get('/signupp', viewcontroller.signup);
router.get('/alluser', authcontroller.protect, viewcontroller.users);
router.get('/video', authcontroller.protect, viewcontroller.video);
router.get('/updateuser', authcontroller.protect, viewcontroller.updateuser);

module.exports = router;
