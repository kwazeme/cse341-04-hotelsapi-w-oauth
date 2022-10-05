/*
*
*
*   Hotels reseravtions functions
*
*/

const { response} = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get all southern sun Users reservations
const getReservations = async (req, res, next) => {
    const results = await mongodb.getDb().db().collection('reservations').find();
    results.toArray().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data);
    });
};

// create a reservation
const createReservation = async (req, res, next) => {
    const userId = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    hotel_info: req.body.hotel_info,
    check_in_date: req.body.check_in_date,
    check_out_date: req.body.check_out_date,
    number_of_adults: req.body.number_of_adults,
    number_of_children: req.body.number_of_children,
    payment_method: req.body.payment_method
    };
    try {
      result = await mongodb.getDb().db().collection('reservations').insertOne(userId);
      const userId = ObjectId(req.params.id);
      res.setHeader('Content-Type', 'application/json');
      res.status(201).json(response) && `New User added _id ${userId}.`;
      // console.log(response);
    } catch (error) {
      res.status(500).json(response) || 'User not created, try again.';
    }};

// Get a reservation
const getReservationById = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('users').find({ _id:userId });
  result.toArray().then((data) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data[0]);
  });
};

  
// PUT or Update a reseravtion
const updateReservationById = async (req, res, next) => {
  const userId = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    hotel_info: req.body.hotel_info,
    check_in_date: req.body.check_in_date,
    check_out_date: req.body.check_out_date,
    number_of_adults: req.body.number_of_adults,
    number_of_children: req.body.number_of_children,
    payment_method: req.body.payment_method
  };
  try {
    result = await mongodb.getDb().db().collection('reservations').updateOne(userId);
    const userId = ObjectId(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(response) && `New User added _id ${userId}.`;
    // console.log(response);
  } catch (error) {
    res.status(500).json(response) || 'user not updated, try again.';
  }};

// Delete reservation by _Id
const deleteReservationById = async (req, res, next) => {
  const userId = ObjectId(req.params.id);
  try {
    await mongodb.getDb().db().collection('reservations').deleteOne({ _id:userId }, true);
    // console.log(response);
    res.status(204).send;
  } catch (error) {
     res.status(500).send;
  }};


module.exports = {
    getReservations,
    createReservation,
    getReservationById,
    updateReservationById,
    deleteReservationById
}

