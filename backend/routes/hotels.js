/*
*
*   Hotels Routes
*
*/

const express = require('express');
const hotelCatalogue = require('../controllers/hotels');
const router = express.Router();

const { catalogueValidation } = require('../middleware/validation');

 router.get('/', catalogueValidation, hotelCatalogue.getHotels);
 router.post('/', catalogueValidation, hotelCatalogue.createHotel);
 router.get('/:id', catalogueValidation, hotelCatalogue.getHotelById);
 router.put('/:id', catalogueValidation, hotelCatalogue.updateHotel);
 router.delete('/:id', catalogueValidation, hotelCatalogue.deleteHotelById);


 module.exports = router;