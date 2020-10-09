
exports.seed = function(knex) {
 const projects = [
   { // 1
     project_name: "SQL",
     project_description: "write queries",
     completed: false,
   },
   { // 2
    project_name: "JS app",
    project_description: "create react app",
    completed: false,
  },
  { // 3
    project_name: "Portfolio",
    project_description: "work on portfolio",
    completed: false,
  },
 ];

 return knex('projects').insert(projects);
};
