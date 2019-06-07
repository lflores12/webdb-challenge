
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
      tbl.increments();

      tbl
      .string('name', 128)
      .notNullable()
      .unique();

      tbl
      .string('description', 500)
      .notNullable();

      tbl
      .boolean('is_complete');
  })

  .createTable('actions', function(tbl) {
      tbl.increments();

      tbl
      .string('description',500)
      .notNullable();

      tbl
      .text('notes',500)
      .notNullable();

      tbl
      .boolean('is_complete');

      tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dishes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('actions')
  .dropTableIfExists('projects')
};
