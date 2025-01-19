exports.up = async function(knex) {
  await knex.schema.createTable('items', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description');
    table.float('price').notNullable();
    table.string('image_url');
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE'); // Ensure the foreign key is correctly set
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('items');
};
