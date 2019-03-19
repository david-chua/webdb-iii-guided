
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('name', 128)
      .notNullable()
    table.integer('role_id')
      .unsigned()
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
