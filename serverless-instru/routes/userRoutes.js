const express = require('express');
const { getUsers, getUser, signUp } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/signup', signUp);

module.exports = router;
