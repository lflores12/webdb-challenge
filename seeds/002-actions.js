
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'description for action 1', notes: "notes for action 1", is_complete: false, project_id: 1},
        { description: 'description for action 2', notes: "notes for action 2", is_complete: false, project_id: 1},
        { description: 'description for action 3', notes: "notes for action 3", is_complete: false, project_id: 2}
      ]);
    });
};
