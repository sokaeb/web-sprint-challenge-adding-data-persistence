
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name').notNullable().unique();
      tbl.text('project_description');
      tbl.boolean('completed').defaultTo(false).notNullable();
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name').notNullable().unique();
      tbl.text('resource_description');
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('task_description').notNullable();
      tbl.text('notes');
      tbl.boolean('completed').defaultTo(false).notNullable();

      tbl.integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
  .createTable('proj_res', tbl => {
      tbl.increments();

      tbl.integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

      tbl.integer('resource_id')
      .unsigned()
      .references('id')
      .inTable('resources')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('proj_res')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
