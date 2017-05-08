
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('experience').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('experience').insert({
          id: 1,
          title: "Paladin Press",
          tag_line: "E-commerce site with over 600 products.",
          short_description: "While working at Paladin Press, I led the marketing team in a website revamp of the e-commerce website that contains over 600 products. We also integrated the downloadable formats to the website.",
          full_description: "Some of the major changes to Paladin Press' website was converting the website to HTML5, integrating the downloadable formats of products into each product page, creating a mobile version of the site, and expediting the checkout process. The overall look of the site was also changed with the newsletter signup positioned in the header of each page and the mini cart and blog feed was added to the homepage. The changes to the website were beneficial with more newsletter signups, less cart abandonments, and increased sales of the downloadable products.",
          main_image: "https://github.com/bradefting/portfolio-website/blob/master/public/images/paladin/new-home-cart.jpg?raw=true",
          old_image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/paladin/old-home.jpg?raw=true",
          old_image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/paladin/old-ulti2.jpg?raw=true",
          new_image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/paladin/new-ulti2.jpg?raw=true",
          new_image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/paladin/paladin-mobile.jpg?raw=true",
          text1: "The new homepage has the newsletter signup in the header, a box to advertise for sales and promotions below the left navigation, and a mini cart and blog feed in a column on the right. It was important to the owner to showcase more products above the fold of the website so the size of the slideshow was decreased and three additional best-selling products were positioned above the fold.",
          text2: "The new product pages Changes to the product pages include the addition of the mini cart, purchase as a set, and recently viewed items to the right-hand side. Sample videos for each video product, and we integrated the sales of downloadable formats to the products.",
          text3: "The revamp also wrote the html in html5 so that the window adjusted based on the device. A mobile site was added for tablet and smart phone devices.",
          text4: "",
          deployed_site: "https://www.paladin-press.com/product/Stop-the-Bully"
        }),
        knex('experience').insert({
          id: 2,
          title: "Bungalows Lydia",
          tag_line: "A Wix website for easy maintenance with no coding knowledge.",
          short_description: "I designed and built a website for a small resort located in Mexico. The Wix platform was selected to allow the owners of the resort the ability to make changes with greater ease.",
          full_description: "When Mayte (from Bungalows Lydia) and I discussed what was important to her in a new website, I learned how important images of the resort were to attract new guests. She communicated the beautiful location of the resort on the Pacific Ocean and how the sunsets and whale sitings motivated guests to visit year after year. With this in mind, I decided to create the website using large images of the resort and of each bungalow. We also discussed how updating the website was important so I used the Wix platform and taught Mayte how to perform changes to the site.",
          main_image: "https://github.com/bradefting/portfolio-website/blob/master/public/images/bungalows-lydia/new-bl-home.jpg?raw=true",
          old_image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/bungalows-lydia/old-bl-home.jpg?raw=true",
          old_image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/bungalows-lydia/old-sunset.jpg?raw=true",
          new_image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/bungalows-lydia/new-sunset.jpg?raw=true",
          new_image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/bungalows-lydia/bl-mobile.jpg?raw=true",
          text1: "Changes to the homepage include: easy to find reservation link in the header, images and brief descriptions of the most popular bungalows, additional navigation links, and a larger slideshow to showcase the resort.",
          text2: "Changes to the product pages include larger images of the bungalow, a more detailed description of the bungalow, and links to some of the other bungalows.",
          text3: "A mobile version of the Bungalows Lydia site was created to encourage users to explore and make reservations from their smaller devices.",
          text4: "",
          deployed_site: "http://www.bungalowslydia.com/"
        }),

      ])
      .then(function(){
        return knex.raw("SELECT setval('experience_id_seq', (SELECT MAX(id) FROM experience))");
      });
    });
};
