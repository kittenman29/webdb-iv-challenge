exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: 'paprika' }, // 1
    { name: 'flour' }, // 2
    { name: 'shrimp' }, // 3
    { name: 'ground beef' }, // 4
  ]);
};
