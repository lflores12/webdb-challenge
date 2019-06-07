const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    getProjectActions
};

function getProjects() {
    return db('projects')
};

function getProjectById(id) {
    return db('projects')
        .join('actions', 'projects.id','actions.project_id',)
        .select('projects.id', 'projects.name', 'projects.description','projects.is_complete', {action: 'actions.description'})
        .where({ 'projects.id': id })
        
  }
  function getProjectActions(projectId) {
    return db('actions as a')
      .join('projects as p', 'p.id', 'a.project_id')
      .select('a.id', 'a.description', 'a.notes', 'a.is_complete')
      .where('a.project_id', projectId);
  }

function addProject(project) {
    return db('projects')
    .insert(project, 'id')
}