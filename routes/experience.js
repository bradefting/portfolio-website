"use strict";

const express = require('express');
const router = express.Router();
const knex = require('../knex');

//get all
router.get('/', (req, res, next) =>{
  knex('experience')
     .select('*')
     .then((results)=>{
       res.send(results);
     })
     .catch((err)=>{
       next(err);
     });
});

//get by id
router.get('/:id', (req, res, next) =>{
  knex('experience')
     .select('*')
     .where('id', req.params.id)
     .then((results)=>{
       res.send(results[0]);
     })
     .catch((err)=>{
       next(err);
     });
});

//post new
router.post('/', (req, res, next) =>{
  knex('experience')
     .insert({
       title: req.body.title,
       short_description: req.body.short_description,
       main_image: req.body.main_image,
       deployed_site: req.body.deployed_site
     }, ['*'])
     .then((results)=>{
       res.send(results[0]);
     })
     .catch((err)=>{
       next(err);
     });
});

//update
router.patch('/:id', (req, res, next) =>{
  knex('experience')
     .where('id', req.params.id)
     .update({
       title: req.body.title,
       short_description: req.body.short_description,
       main_image: req.body.main_image,
       deployed_site: req.body.deployed_site
     }, ['*'])
     .then((results)=>{
       res.send(results[0]);
     })
     .catch((err)=>{
       next(err);
     });
});

//delete
router.delete('/:id', (req, res, next) =>{
  knex('experience')
     .where('id', req.params.id)
     .returning(['id', 'title', 'short_description'])
     .del()
     .then((results)=>{
       res.send(results[0]);
     })
     .catch((err)=>{
       next(err);
     });
});

module.exports = router;
