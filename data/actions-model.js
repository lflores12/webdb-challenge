const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getActions,
    addAction
};

function getActions() {
    return db('actions')
};

function addAction(action) {
    return db('actions')
    .insert(action, 'id')
}