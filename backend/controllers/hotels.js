/*
*
*
*   Hotels Catalogue controller functions
*
*/

const { response} = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get all southern sun hotels
const getHotels = async (req, res, next) => {
    const results = await mongodb.getDb().db().collection('hotel_catalogue').find();
    results.toArray().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data);
    });
};

// Post hotel Catalogue
const createHotel = async (req, res, next) => {
    const hotelInfor = {
    imageurl: req.body.imageurl,
    rating: req.body.rating,
    description: req.body.description,
    phone: req.body.phone,
    email: req.body.email,
    website: req.body.website,
    book_now: req.body.book_now
    };
    try {
      result = await mongodb.getDb().db().collection('hotel_catalogue').insertOne(hotelInfor);
      const hotelId = ObjectId(req.params.id);
      res.setHeader('Content-Type', 'application/json');
      res.status(201).json(response) && `New Hotel added _id ${hotelId} added to catalogue.`;
      // console.log(response);
    } catch (error) {
      res.status(500).json(response) || 'Hotel not added to catalogue, try again.';
    }};

// Get One Cantact from contacts collection
const getHotelById = async (req, res, next) => {
  const hotelId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('hotel_catalogue').find({ _id:hotelId });
  result.toArray().then((data) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data[0]);
  });
};

  
// PUT or Update existing hotel Catalogue
const updateHotel = async (req, res, next) => {
  const hotelInfor = {
  imageurl: req.body.imageurl,
  rating: req.body.rating,
  description: req.body.description,
  phone: req.body.phone,
  email: req.body.email,
  website: req.body.website,
  book_now: req.body.book_now
  };
  try {
    result = await mongodb.getDb().db().collection('hotel_catalogue').updateOne(hotelInfor);
    const hotelId = ObjectId(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(response) && `New Hotel added _id ${hotelId} catalogue updated.`;
    // console.log(response);
  } catch (error) {
    res.status(500).json(response) || 'Hotel not updated, try again.';
  }};

// Delete Hetel fron Catalogue by _Id
const deleteHotelById = async (req, res, next) => {
  const hotelId = ObjectId(req.params.id);
  try {
    await mongodb.getDb().db().collection('hotel_catalogue').deleteOne({ _id:hotelId }, true);
    // console.log(response);
    res.status(204).send;
  } catch (error) {
     res.status(500).send;
  }};


module.exports = {
    getHotels,
    createHotel,
    getHotelById,
    updateHotel,
    deleteHotelById
}

