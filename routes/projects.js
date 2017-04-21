"use strict";

const express = require('express');
const router = express.Router();
const knex = require('../knex');

//get all
router.get('/', (req, res, next) =>{
  knex('portfolio_projects')
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
  knex('portfolio_projects')
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
  knex('portfolio_projects')
     .insert({
       title: req.body.title,
       description: req.body.description,
       technologies: req.body.technologies,
       image: req.body.image,
       deployed_site: req.body.deployed_site,
       github_link: req.body.github_link,
       video_link: req.body.video_link
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
  knex('portfolio_projects')
     .where('id', req.params.id)
     .update({
       title: req.body.title,
       description: req.body.description,
       technologies: req.body.technologies,
       image: req.body.image,
       deployed_site: req.body.deployed_site,
       github_link: req.body.github_link,
       video_link: req.body.video_link
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
  knex('portfolio_projects')
     .where('id', req.params.id)
     .returning(['id', 'title', 'description'])
     .del()
     .then((results)=>{
       res.send(results[0]);
     })
     .catch((err)=>{
       next(err);
     });
});

module.exports = router;
