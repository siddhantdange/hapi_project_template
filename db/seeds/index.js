'use strict';

const TemplateData = require('./data/templateData');

exports.seed = function (Knex) {
  return Knex('templateData').truncate()
  .then(() => {
    return Knex('templateData').insert(TemplateData);
  });
};
