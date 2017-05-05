"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('portfolio_projects', function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('short_description').notNullable();
    table.string('full_description').notNullable();
    table.string('technologies').notNullable();
    table.string('api').notNullable();
    table.string('main_image').notNullable();
    table.string('project_images').notNullable();
    table.string('deployed_site').notNullable();
    table.string('github_link').notNullable();
    table.string('video_link').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('portfolio_projects');
};
