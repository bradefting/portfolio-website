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
          tag_line: "Our bot knows therapy.",
          short_description: "Web app that uses a bot to pre-qualify users for a spinal cord injury rehabilitation program. Uses Microsoft Bot Framework to accept and qualify users on website and on Facebook Messenger.",
          full_description: "TheraBot is a web app that uses the Microsoft Bot Framework to create a bot that pre-qualifies users for a spinal cord injury rehabilitation program. My bot's name is Bender so it feels like you are actually chatting to an actual person, or in this case robot. Bender is programmed to ask users various questions and at the end makes a decision if the user is a good fit for a particular program. Bender can also display a slideshow of other programs that the rehab center offers. Bots like Bender are beneficial to companies to help answer frequently asked questions or to offer other assistance when an actual representative isn't available.",
          technologies: 'Microsoft Bot Framework, Azure App Services, NodeJS, Bootstrap',
          api: 'Facebook Messenger',
          main_image: 'https://github.com/bradefting/portfolio-website/blob/master/public/images/therabot/TheraBot.jpg?raw=true',
          image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/therabot/bender-intro.jpg?raw=true",
          image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/therabot/incomplete.jpg?raw=true",
          image3: "https://github.com/bradefting/portfolio-website/blob/master/public/images/therabot/validate.jpg?raw=true",
          image4: "https://github.com/bradefting/portfolio-website/blob/master/public/images/therabot/messenger.jpg?raw=true",
          step1: "Click the ask button to start the conversation with Bender. Bender can pre-qualify you for the NRN program or offer information about other therapy programs.",
          step2: "Bender asks questions to determine if a user is a a good fit for the NRN program. Here an image is used as a reference to help users answer questions.",
          step3: "After asking qualifying questions, Bender informs the user if they are a good match for the program.",
          step4: "The same code that controls Bender on the TheraBot website can be used on Facebook Messenger using the Microsoft Bot Framework.",
          deployed_site: 'http://therabot.azurewebsites.net/',
          github_link: 'https://github.com/bradefting',
          video_link: 'https://www.youtube.com/watch?v=vWmQPOAuPQs'
        }),
        knex('portfolio_projects').insert({
          id: 2,
          title: 'NightLite',
          tag_line: "Search for the best locations to stargaze.",
          short_description: "Full-stack CRUD app to search and share the best locations for stargazing. Uses PostgreSQL to store locations and ESRI's light pollution map to display.",
          full_description: "NightLite is a CRUD app that allows users to create observation points on a light pollution map, read the observation points from other users, and update and delete their observation points. NightLite is a full-stack app that uses a Node server and a PostreSQL database to store the users login, observation, and comment data. CRUD functionality is executed using AJAX requests and Express and Knex.js are used to route the requests and query the database.",
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
          id: 3,
          title: 'GooseHire',
          tag_line: "Goose your resume. Get hired.",
          short_description: "Full-stack web app that matches a user's skills with job descriptions using the Indeed job search API. Users can save job searches using MongoDB.",
          full_description: "GooseHire is a full-stack web app that uses AngularJS to create a single-page application. Component based Angular 1.6 was used to build this app.",
          technologies: 'AngularJS, Pure.css, NodeJS, MongoDB, Mongoose, Passport OAuth, Heroku',
          api: 'Indeed Job Search',
          main_image: 'https://github.com/bradefting/portfolio-website/blob/master/public/images/goosehire/GooseHire.jpg?raw=true',
          image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/goosehire/landing-page.jpg?raw=true",
          image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/goosehire/job-search-result.jpg?raw=true",
          image3: "https://github.com/bradefting/portfolio-website/blob/master/public/images/goosehire/word-cloud.jpg?raw=true",
          image4: "https://github.com/bradefting/portfolio-website/blob/master/public/images/goosehire/update-skills.jpg?raw=true",
          step1: "Enter the skills and technologies that you would like to search Indeed using. Add the city or 5-digit zip code of your prefered job location.",
          step2: "GooseHire searches Indeed and displays the job postings that meet your search criteria. Click on a listing to build a word cloud using the job posting.",
          step3: "A word cloud is created displaying the top rated skills for that specific job. The larger the word, the more often it is used in the description and more important to have on your resume.",
          step4: "Update your skills and technologies to better align with the job posting and paste in their resume through the copy to clipboard feature.",
          deployed_site: 'https://q3-goosehire.herokuapp.com/',
          github_link: 'https://github.com/bradefting/q3-goosehire',
          video_link: 'https://www.youtube.com/watch?v=vWmQPOAuPQs'
        }),
        knex('portfolio_projects').insert({
          id: 4,
          title: 'Brewzinga!',
          tag_line: "The perfect beer for any occasion.",
          short_description: "Web app that recommends beers based on an event or the user's local weather using Weather Underground and BreweryDB APIs. Single-page app also displays local breweries using AJAX and jQuery.",
          full_description: "Brewzinga! is a front-end single-page application that uses two APIs to provide local data to users. jQuery and AJAX are used in this app to send requests to Weather Underground API and BreweryDB API based on user input. Since AJAX requests are asynchronous, users aren't waiting for the response from the API before doing other things on the page. Brewzinga! uses the Materialize Material Design framework to provide a responsive design that is attractive to users on any size devices.",
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
