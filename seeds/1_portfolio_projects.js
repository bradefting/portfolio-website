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
          short_description: "Our bot knows therapy.",
          full_description: 'Web application that uses a bot to pre-qualify users for a spinal cord injury rehabilitation program. Uses Microsoft Bot Framework to accept and qualify users on website and on Facebook Messenger using same code.',
          technologies: 'Microsoft Bot Framework, Azure App Services, NodeJS, Bootstrap',
          api: 'Facebook Messenger',
          main_image: 'https://github.com/bradefting/portfolio-website/blob/master/public/images/therabot/TheraBot.jpg?raw=true',
          image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/therabot/bender-intro.jpg?raw=true",
          image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/therabot/incomplete.jpg?raw=true",
          image3: "https://github.com/bradefting/portfolio-website/blob/master/public/images/therabot/validate.jpg?raw=true",
          image4: "https://github.com/bradefting/portfolio-website/blob/master/public/images/therabot/messenger.jpg?raw=true",
          step1: "Click the ask button to start the conversation with Bender. Bender can pre-qualify you for the NRN program or offer information about other therapy programs.",
          step2: "Bender asks questions to determine if a user is a a good fit for the NRN program. Here an image is used as a reference to help users answer questions.",
          step3: "After asking qualifying questions, Bender lets the user know they are a good fit or that they aren't at that time but to try again in the future.",
          step4: "The same code that controls Bender on the TheraBot website can be used on Facebook Messenger using the Microsoft Bot Framework.",
          deployed_site: 'http://therabot.azurewebsites.net/',
          github_link: 'https://github.com/bradefting',
          video_link: 'https://www.youtube.com/watch?v=vWmQPOAuPQs'
        }),
        knex('portfolio_projects').insert({
          id: 2,
          title: 'GooseHire',
          short_description: "Goose your resume. Get hired. ",
          full_description: "Full-stack web application that matches a user's skills with job descriptions using the Indeed job search API. Users can save job searches using MongoDB.",
          technologies: 'AngularJS, NodeJS, MongoDB, Mongoose, Passport oAuth, Heroku',
          api: 'Indeed Job Search',
          main_image: 'https://github.com/bradefting/portfolio-website/blob/master/public/images/goosehire/GooseHire.jpg?raw=true',
          image1: "",
          image2: "",
          image3: "",
          image4: "",
          step1: "",
          step2: "",
          step3: "",
          step4: "",
          deployed_site: 'https://q3-goosehire.herokuapp.com/',
          github_link: 'https://github.com/bradefting/q3-goosehire',
          video_link: 'https://www.youtube.com/watch?v=vWmQPOAuPQs'
        }),
        knex('portfolio_projects').insert({
          id: 3,
          title: 'NightLite',
          short_description: "Find the best location to stargaze.",
          full_description: "Full-stack web application to search and share the best locations for stargazing. Uses PostgreSQL to store locations and ESRI's light pollution map to display.",
          technologies: 'Materialize, jQuery, AJAX, NodeJS, Express, Knex.js, PostgreSQL, Heroku',
          api: 'Esri ArcGIS Maps',
          main_image: 'https://github.com/bradefting/portfolio-website/blob/master/public/images/nightlite/NightLite.jpg?raw=true',
          image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/nightlite/Explore.jpg?raw=true",
          image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/nightlite/Ob-map.jpg?raw=true",
          image3: "https://github.com/bradefting/portfolio-website/blob/master/public/images/nightlite/Ob-list.jpg?raw=true",
          image4: "https://github.com/bradefting/portfolio-website/blob/master/public/images/nightlite/Ob-new.jpg?raw=true",
          step1: "The explore page provides a brief description of light pollution, shows a visual comparision of how it affects the night sky, and provides maps of light pollution globally.",
          step2: "Login to gain access to the observation page that displays observation points created by users. Users can search specific locations by zip code, city, or address.",
          step3: "The observation page also provides additional information about each plotted observation location including a star rating and comments about the location.",
          step4: "Users can create, update, and delete any observation or comment that they post and administrators can add, update, and delete the observations and comments of all users.",
          deployed_site: 'https://bradefting-nightlite.herokuapp.com/',
          github_link: 'https://github.com/bradefting/nightlite',
          video_link: 'https://www.youtube.com/watch?v=jhVOPEd9WoQ'
        }),
        knex('portfolio_projects').insert({
          id: 4,
          title: 'Brewzinga!',
          short_description: "The perfect beer for any occasion.",
          full_description: "Web application that recommends beers based on an event or the user's local weather using Weather Underground and BreweryDB APIs. Single-page app also displays local breweries using AJAX and jQuery.",
          technologies: 'Materialize, jQuery, AJAX, Surge',
          api: 'Weather Underground, BreweryDB',
          main_image: 'https://github.com/bradefting/portfolio-website/blob/master/public/images/brewzinga/Brewzinga.jpg?raw=true',
          image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/brewzinga/get-weather.jpg?raw=true",
          image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/brewzinga/get-weather-beers.jpg?raw=true",
          image3: "https://github.com/bradefting/portfolio-website/blob/master/public/images/brewzinga/event-beers.jpg?raw=true",
          image4: "https://github.com/bradefting/portfolio-website/blob/master/public/images/brewzinga/local-breweries.jpg?raw=true",
          step1: "Enter your 5-digit zip code and Brewzinga! will recommend three beer styles based on your local temperature. Weather provided by Weather Underground API",
          step2: "Select a style of beer from the recommendations and the name of three beers are provided. Click the name of a beer to see more about. Beers provided by BreweryDB API.",
          step3: "Want beer recommendations based on an event? Select an event and Brewzinga! will make recommendations based on the event.",
          step4: "Prefer to check out a local brewery? Enter your 5-digit zip code to see the breweries in your area.",
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
