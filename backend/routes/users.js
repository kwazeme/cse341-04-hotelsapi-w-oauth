/*
*
*   Hotels Routes
*
*/

const express = require('express');
const users = require('../controllers/user');
const router = express.Router();



 router.get('/', users.getUsers);
 router.post('/', users.createUser);
 router.get('/:id', users.getUserById);
 router.put('/:id', users.updateUserById);
 router.delete('/:id', users.deleteUserById);


 module.exports = router;
