exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: 'Marcos', dishes_id: 1 }, // 1
    { name: 'Luce', dishes_id: 1 }, // 2
    { name: 'Savoy', dishes_id: 1 }, // 3
    { name: 'Tex-Mex', dishes_id: 2 }, // 4
    { name: 'Mexican', dishes_id: 2 }, // 5
    { name: 'American', dishes_id: 2 }, // 6
    { name: 'Santaella', dishes_id: 3 }, // 7
    { name: 'Mary', dishes_id: 3 }, // 8
    { name: 'Will', dishes_id: 3 }, // 9
    { name: 'Cheeseburger', dishes_id: 4 }, // 10
    { name: 'Juicy-Lucy', dishes_id: 4 }, // 11
    { name: 'Bleu', dishes_id: 4 }, // 12
  ]);
};