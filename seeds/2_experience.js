
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
          short_description: "While working at Paladin Press, I led the marketing team in a revamp of the e-commerce website that contains over 600 products. Several other changes were made to the website to provide a superior user experience.",
          full_description: "Some of the major changes to Paladin Press' website were converting the website to HTML5, integrating the downloadable formats of products into the product pages, creating a mobile version of the site, and expediting the checkout process. The overall look of the site was also changed with the newsletter signup positioned in the header of each page and the mini cart and blog feed were added to the homepage. The changes to the website were beneficial with more newsletter signups, less cart abandonments, and increased sales of the downloadable products.",
          main_image: "https://s3-us-west-2.amazonaws.com/bradsportfolio/paladin/new-home.jpg",
          old_image1: "https://s3-us-west-2.amazonaws.com/bradsportfolio/paladin/old-home.jpg",
          old_image2: "https://s3-us-west-2.amazonaws.com/bradsportfolio/paladin/old-ulti2.jpg",
          new_image1: "https://s3-us-west-2.amazonaws.com/bradsportfolio/paladin/new-ulti3.jpg",
          new_image2: "https://s3-us-west-2.amazonaws.com/bradsportfolio/paladin/paladin-mobile.jpg",
          text1: "The new homepage has the newsletter signup in the header, a box to advertise for sales and promotions below the left navigation, and a mini cart and blog feed in a column on the right. It was important to the owner of the company to showcase more products above the fold of the website so the size of the slideshow was decreased and three additional best-selling products were positioned above the fold.",
          text2: "The new product pages integrate the downloadable formats of products in a drop-down list, provide sample clips from the products, and include download instructions for the downloadable formats. To the right of the product information a mini cart was added. A new section offering the product as a set and a section of recently viewed products were also added.",
          text3: "A mobile version of the website was built during the revamp for a better user experience on tablets and smart phones. Some components of the full site, like the slideshow and blog feed, were removed from the mobile site because of the limited space. If a user on a smaller device prefers the full site, they can switch to the full site using a link in the footer.",
          text4: "",
          deployed_site: "https://www.paladin-press.com/product/Stop-the-Bully"
        }),
        knex('experience').insert({
          id: 2,
          title: "Bungalows Lydia",
          tag_line: "Using the Wix platform for easy maintenance for those with minimal to no coding knowledge.",
          short_description: "I designed and built a website for a small resort located in Mexico. The Wix platform was selected to allow the owners of the resort the ability to make future changes with greater ease.",
          full_description: "When Mayte (from Bungalows Lydia) and I discussed building a new website for her resort, I learned that images of the resort's location were what attracted new guests. Mayte communicated the beautiful location of the resort on the Pacific Ocean and how the sunsets and whale sightings motivated guests to visit and to come back year after year. With this in mind, I decided to create the website using large images of the resort and of each bungalow. We also discussed how updating the website in the future was important so I used the Wix platform and taught Mayte how to perform changes to the website.",
          main_image: "https://s3-us-west-2.amazonaws.com/bradsportfolio/bungalows_lydia/new-bl-home.jpg",
          old_image1: "https://s3-us-west-2.amazonaws.com/bradsportfolio/bungalows_lydia/old-bl-home.jpg",
          old_image2: "https://s3-us-west-2.amazonaws.com/bradsportfolio/bungalows_lydia/old-sunset.jpg",
          new_image1: "https://s3-us-west-2.amazonaws.com/bradsportfolio/bungalows_lydia/new-sunset.jpg",
          new_image2: "https://s3-us-west-2.amazonaws.com/bradsportfolio/bungalows_lydia/bl-mobile.jpg",
          text1: "Changes to the homepage include an easy to find reservation link in the header, additional navigation links, images and brief descriptions of the most popular bungalows, and a larger slideshow to better showcase the resort.",
          text2: "Changes to the product pages include larger images of the bungalow, a more detailed description of the bungalow's amenities, and links to some of the other bungalows.",
          text3: "A mobile version of the Bungalows Lydia website was created so users on smaller devices have the same experience as users on larger devices.",
          text4: "",
          deployed_site: "http://www.bungalowslydia.com/"
        }),

      ])
      .then(function(){
        return knex.raw("SELECT setval('experience_id_seq', (SELECT MAX(id) FROM experience))");
      });
    });
};
