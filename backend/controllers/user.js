/*
*
*
*   Hotels User controller functions
*
*/

const { response} = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// Get all southern sun Users
const getUsers = async (req, res, next) => {
    const results = await mongodb.getDb().db().collection('users').find();
    results.toArray().then((data) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data);
    });
};

// create user
const createUser = async (req, res, next) => {
    const userId = {
    username: req.body.username,
    password: req.body.password,
    display_name: req.body.display_name
    };
    try {
      result = await mongodb.getDb().db().collection('users').insertOne(userId);
      const userId = ObjectId(req.params.id);
      res.setHeader('Content-Type', 'application/json');
      res.status(201).json(response) && `New User added _id ${userId}.`;
      // console.log(response);
    } catch (error) {
      res.status(500).json(response) || 'User not created, try again.';
    }};

// Get One Cantact from contacts collection
const getUserById = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('users').find({ _id:userId });
  result.toArray().then((data) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data[0]);
  });
};

  
// PUT or Update existing Users
const updateUserById = async (req, res, next) => {
  const userId = {
    username: req.body.username,
    password: req.body.password,
    display_name: req.body.display_name
  };
  try {
    result = await mongodb.getDb().db().collection('users').updateOne(userId);
    const userId = ObjectId(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json(response) && `New User added _id ${userId}.`;
    // console.log(response);
  } catch (error) {
    res.status(500).json(response) || 'user not updated, try again.';
  }};

// Delete User by _Id
const deleteUserById = async (req, res, next) => {
  const userId = ObjectId(req.params.id);
  try {
    await mongodb.getDb().db().collection('user').deleteOne({ _id:userId }, true);
    // console.log(response);
    res.status(204).send;
  } catch (error) {
     res.status(500).send;
  }};


module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
}

