"use strict";

// to invoke this knex migrate:latest;
exports.up = function(knex, Promise) {
  return knex.schema.createTable('portfolio_projects', function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('tag_line').notNullable();
    table.string('short_description').notNullable();
    table.string('full_description', 600).notNullable();
    table.string('technologies').notNullable();
    table.string('api').notNullable();
    table.string('main_image').notNullable();
    table.string('image1').notNullable();
    table.string('image2').notNullable();
    table.string('image3').notNullable();
    table.string('image4').notNullable();
    table.string('step1', 400).notNullable();
    table.string('step2', 400).notNullable();
    table.string('step3', 400).notNullable();
    table.string('step4', 400).notNullable();
    table.string('deployed_site').notNullable();
    table.string('github_link').notNullable();
    table.string('video_link').notNullable();
    table.timestamps(true, true);
  });
};

// to invoke this knex migrate:rollback;
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('portfolio_projects');
};
