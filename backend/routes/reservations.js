/*
*
*   Hotels Routes
*
*/

const express = require('express');
const reservations = require('../controllers/reservations');
const router = express.Router();

 router.get('/', reservations.getReservations);
 router.post('/', reservations.createReservation);
 router.get('/:id', reservations.getReservationById);
 router.put('/:id', reservations.updateReservationById);
 router.delete('/:id', reservations.deleteReservationById);


 module.exports = router;