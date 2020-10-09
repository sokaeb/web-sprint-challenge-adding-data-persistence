
exports.seed = function(knex) {
  const combo = [
    {
      // 1
      project_id: 1,
      resource_id: 1,
    },
    {
      // 2
      project_id: 1,
      resource_id: 2,
    },
    {
      // 3
      project_id: 1,
      resource_id: 3,
    },
    {
      // 4
      project_id: 2,
      resource_id: 2,
    },
    {
      // 5
      project_id: 3,
      resource_id: 2,
    },
    {
      // 6
      project_id: 3,
      resource_id: 3,
    },
  ];

  return knex('proj_res').insert(combo);
};
