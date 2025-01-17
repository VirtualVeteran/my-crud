exports.up = function(knex) {
    return knex.schema.createTable('items', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description');
      table.float('price').notNullable();
      table.string('image_url');
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items');
  };
  