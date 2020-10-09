
exports.seed = function(knex) {
  const tasks = [
    { // 1
      task_description: "practice writing queries",
      notes: "refer to w3schools",
      completed: false,
      project_id: 1,
    },
    { // 2
      task_description: "read the documentation",
      notes: "refer to web",
      completed: false,
      project_id: 1,
    },
    { // 3
      task_description: "learn about other RDBMS",
      notes: "research postgres",
      completed: false,
      project_id: 1,
    },
    { // 4
     task_description: "create a recipe app",
     notes: "plan UI first",
     completed: false,
     project_id: 2,
   },
   { // 5
    task_description: "read React documentation",
    notes: "found on reactjs org",
    completed: false,
    project_id: 2,
  },
   { // 6
     task_description: "refine projects for portfolio",
     notes: "create additional projects",
     completed: false,
     project_id: 3,
   },
  ];
 
  return knex('tasks').insert(tasks);
 };
