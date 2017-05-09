"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('experience', function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('tag_line').notNullable();
    table.string('short_description').notNullable();
    table.string('full_description', 800).notNullable();
    table.string('main_image').notNullable();
    table.string('old_image1').notNullable();
    table.string('old_image2').notNullable();
    table.string('new_image1').notNullable();
    table.string('new_image2').notNullable();
    table.string('text1', 500).notNullable();
    table.string('text2', 500).notNullable();
    table.string('text3', 500).notNullable();
    table.string('text4', 500).notNullable();
    table.string('deployed_site').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('experience');
};
