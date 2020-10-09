
exports.seed = function(knex) {
  const resources = [
    { // 1
      resource_name: "SQLite Studio",
      resource_description: "RDBMS",
    },
    { // 2
     resource_name: "VSCode",
     resource_description: "code editor",
   },
   { // 3
     resource_name: "Computer",
     resource_description: "developer local machine",
   },
   {
     resource_name: "Zoom",
     resource_description: "video communication platform",
   },
  ];
 
  return knex('resources').insert(resources);
 };
