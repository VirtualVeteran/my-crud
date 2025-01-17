exports.seed = async function(knex) {
  // Deletes ALL existing entries in the users table
  await knex('users').del();

  // Seed data for users with kawaii names
  const users = [
    { first_name: 'Mochi', last_name: 'Bunny', username: 'mochi_bunny', password: 'password123' },
    { first_name: 'Sakura', last_name: 'Cherry', username: 'sakura_cherry', password: 'password123' },
    { first_name: 'Pudding', last_name: 'Panda', username: 'pudding_panda', password: 'password123' },
    { first_name: 'Ringo', last_name: 'Kittens', username: 'ringo_kittens', password: 'password123' },
    { first_name: 'Momo', last_name: 'Peach', username: 'momo_peach', password: 'password123' },
    { first_name: 'Haru', last_name: 'Tofu', username: 'haru_tofu', password: 'password123' },
    { first_name: 'Yuki', last_name: 'Snowflake', username: 'yuki_snowflake', password: 'password123' },
    { first_name: 'Luna', last_name: 'Moonbeam', username: 'luna_moonbeam', password: 'password123' },
    { first_name: 'Nori', last_name: 'Sushi', username: 'nori_sushi', password: 'password123' },
    { first_name: 'Kumo', last_name: 'Cloud', username: 'kumo_cloud', password: 'password123' }
  ];

  // Insert seed data for users
  await knex('users').insert(users);
};
