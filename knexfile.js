"use strict";

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/portfolio_projects_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/portfolio_projects_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
