exports.seed = function(knex, Promise) {
  return knex('cohort_students').insert([
    { recipes_id: 1, ingredients_id: 1 }, // 1
    { recipes_id: 1, ingredients_id: 2 }, // 2
    { recipes_id: 2, ingredients_id: 2 }, // 3
    { recipes_id: 2, ingredients_id: 3 }, // 4
    { recipes_id: 2, ingredients_id: 4 }, // 5
    { recipes_id: 3, ingredients_id: 1 }, // 6
    { recipes_id: 3, ingredients_id: 2 }, // 7
    { recipes_id: 4, ingredients_id: 1 }, // 8
    { recipes_id: 4, ingredients_id: 4 }, // 9
  ]);
};