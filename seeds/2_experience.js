
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('experience').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('experience').insert({
          id: 1,
          title: "Paladin Press",
          short_description: "While working at Paladin Press, I led the marketing team in revamping the e-commerce website that contains over 500 products. I also helped integrate the downloadable products to the website.",
          full_description: "While working at Paladin Press, I led the marketing team in revamping the e-commerce website that contains over 500 products. I also helped integrate the downloadable products to the website.",
          main_image: "https://github.com/bradefting/portfolio-website/blob/master/public/images/paladin/new-home.jpg?raw=true",
          old_image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/paladin/old-home.jpg?raw=true",
          old_image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/paladin/old-ulti2.jpg?raw=true",
          new_image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/paladin/new-download-video.jpg?raw=true",
          new_image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/paladin/paladin-mobile.jpg?raw=true",
          text1: "The revamp kept some similarities but moved the newsletter signup to the header to increase signup, added the blog to the homepage, and made the cart easier",
          text2: "",
          text3: "",
          text4: "",
          deployed_site: "https://www.paladin-press.com/product/Stop-the-Bully"
        }),
        knex('experience').insert({
          id: 2,
          title: "Bungalows Lydia",
          short_description: "I designed and created a website for a small resort in Mexico using Wix. I built this website using Wix so the owners of the resort can maintain the site with greater ease.",
          full_description: "I designed and created a website for a small resort in Mexico using Wix. I built this website using Wix so the owners of the resort can maintain the site with greater ease.",
          main_image: "https://github.com/bradefting/portfolio-website/blob/master/public/images/bungalows-lydia/new-bl-home.jpg?raw=true",
          old_image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/bungalows-lydia/old-bl-home.jpg?raw=true",
          old_image2: "https://github.com/bradefting/portfolio-website/blob/master/public/images/bungalows-lydia/old-sunset.jpg?raw=true",
          new_image1: "https://github.com/bradefting/portfolio-website/blob/master/public/images/bungalows-lydia/new-sunset.jpg?raw=true",
          new_image2: "",
          text1: "",
          text2: "",
          text3: "",
          text4: "",
          deployed_site: "http://www.bungalowslydia.com/"
        }),

      ])
      .then(function(){
        return knex.raw("SELECT setval('experience_id_seq', (SELECT MAX(id) FROM experience))");
      });
    });
};
