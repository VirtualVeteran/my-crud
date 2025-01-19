exports.seed = async function(knex) {
    // Deletes ALL existing entries in the items table
    await knex('items').del();
  
    // Fetch user IDs after users have been seeded
    const users = await knex('users').select('id');
  
    // Map the user IDs to a list of user_id values
    const userIds = users.map(user => user.id);
  
    // Seed data for items, randomly assign users from the list
    const items = [
      { name: 'Kawaii Cat Sticker', description: 'A cute cat sticker with big eyes.', price: 2.5, image_url: 'https://example.com/cat.jpg', user_id: userIds[1] },
      { name: 'Smiling Sushi Plushie', description: 'A soft plushie shaped like sushi.', price: 12.99, image_url: 'https://example.com/sushi.jpg', user_id: userIds[2] },
      { name: 'Adorable Frog Keychain', description: 'A small frog keychain with a big smile.', price: 4.99, image_url: 'https://example.com/frog.jpg', user_id: userIds[3] },
      { name: 'Chibi Unicorn Mug', description: 'A mug featuring a chibi unicorn design.', price: 9.99, image_url: 'https://example.com/unicorn.jpg', user_id: userIds[4] },
      { name: 'Happy Cloud Notebook', description: 'A notebook with a happy cloud on the cover.', price: 6.5, image_url: 'https://example.com/cloud.jpg', user_id: userIds[5] },
      { name: 'Blushing Star Earrings', description: 'A pair of earrings shaped like blushing stars.', price: 8.0, image_url: 'https://example.com/star.jpg', user_id: userIds[6] },
      { name: 'Kawaii Ice Cream Pen', description: 'A pen that looks like ice cream.', price: 3.75, image_url: 'https://example.com/icecream.jpg', user_id: userIds[7] },
      { name: 'Cute Panda Tote Bag', description: 'A tote bag featuring a panda eating bamboo.', price: 14.99, image_url: 'https://example.com/panda.jpg', user_id: userIds[8] },
      { name: 'Lovely Bunny Bookmark', description: 'A bunny-shaped bookmark for book lovers.', price: 2.0, image_url: 'https://example.com/bunny.jpg', user_id: userIds[9] },
      { name: 'Charming Fox Puzzle', description: 'A jigsaw puzzle with a kawaii fox design.', price: 10.5, image_url: 'https://example.com/fox.jpg', user_id: userIds[10] },
    ];
  
    // Insert the seed data into the items table
    await knex('items').insert(items);
  };
  