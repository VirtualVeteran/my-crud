exports.up = async function(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('username').notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true); // Adds created_at and updated_at
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users');
};
