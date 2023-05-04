const express = require('express');
const { getUsers, getUser, signUp, updatePoints } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/signup', signUp);

router.patch('/:userId/points', updatePoints);
router.get('/:userId/points', updatePoints);

module.exports = router;
