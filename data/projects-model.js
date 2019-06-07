const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    getProjectById,
    addProject
};

function getProjects() {
    return db('projects')
};

function getProjectById(id) {
    return db('projects')
        .join('actions', 'projects.id', '=', 'actions.project_id')
        .select('projects.id', 'projects.name', 'projects.description','projects.is_complete' , 'actions.id', {action: 'actions.id'})
        .where({ 'projects.id': id })
        
  }

function addProject(project) {
    return db('projects')
    .insert(project, 'id')
}