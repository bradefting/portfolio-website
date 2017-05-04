"use strict";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('portfolio_projects').del()
    .then(function () {
      return Promise.all([
      // Inserts seed entries
        knex('portfolio_projects').insert({
          id: 1,
          title: 'TheraBot',
          description: 'Web application that uses a bot to pre-qualify users for a spinal cord injury rehabilitation program. Uses Microsoft Bot Framework to accept and qualify users on website and on Facebook Messenger using same code.',
          technologies: 'Microsoft Bot Framework, Azure App Services, NodeJS, Bootstrap',
          api: 'Facebook Messenger',
          image: 'https://github.com/bradefting/portfolio-website/blob/master/public/images/screenshots/TheraBot.png?raw=true',
          deployed_site: 'http://therabot.azurewebsites.net/',
          github_link: 'https://github.com/bradefting',
          video_link: 'https://www.youtube.com/watch?v=vWmQPOAuPQs'
        }),
        knex('portfolio_projects').insert({
          id: 2,
          title: 'GooseHire',
          description: "Full-stack web application that matches a user's skills with job descriptions using the Indeed job search API. Users can save job searches using MongoDB.",
          technologies: 'AngularJS, NodeJS, MongoDB, Mongoose, Passport oAuth, Heroku',
          api: 'Indeed Job Search',
          image: 'https://github.com/bradefting/portfolio-website/blob/master/public/images/screenshots/GooseHire.png?raw=true',
          deployed_site: 'https://q3-goosehire.herokuapp.com/',
          github_link: 'https://github.com/bradefting/q3-goosehire',
          video_link: 'https://www.youtube.com/watch?v=vWmQPOAuPQs'
        }),
        knex('portfolio_projects').insert({
          id: 3,
          title: 'NightLite',
          description: "Full-stack web application to search and share the best locations for stargazing. Uses PostgreSQL to store locations and ESRI's light pollution map to display.",
          technologies: 'Materialize, jQuery, AJAX, NodeJS, Express, Knex.js, PostgreSQL, Heroku',
          api: 'Esri ArcGIS Maps',
          image: 'https://github.com/bradefting/portfolio-website/blob/master/public/images/screenshots/NightLite.png?raw=true',
          deployed_site: 'https://bradefting-nightlite.herokuapp.com/',
          github_link: 'https://github.com/bradefting/nightlite',
          video_link: 'https://www.youtube.com/watch?v=jhVOPEd9WoQ'
        }),
        knex('portfolio_projects').insert({
          id: 4,
          title: 'Brewzinga!',
          description: "Web application that recommends beers based on an event or the user's local weather using Weather Underground and BreweryDB APIs. Single-page app also displays local breweries using AJAX and jQuery.",
          technologies: 'Materialize, jQuery, AJAX, Surge',
          api: 'Weather Underground, BreweryDB',
          image: 'https://github.com/bradefting/portfolio-website/blob/master/public/images/screenshots/Brewzinga.png?raw=true',
          deployed_site: 'http://brewzinga.surge.sh/',
          github_link: 'https://github.com/bradefting/Brewzinga',
          video_link: 'https://www.youtube.com/watch?v=aJO_bQ4lRUc&t=1s'
        })
      ])
      .then(function(){
        return knex.raw("SELECT setval('portfolio_projects_id_seq', (SELECT MAX(id) FROM portfolio_projects))");
      });
    });
};
