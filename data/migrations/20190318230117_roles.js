
exports.up = function(knex, Promise) {
  // define our roles table
  return knex.schema.createTable('roles', tbl => {
    tbl.increments();
    tbl.string('name', 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};
