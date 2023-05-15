const collect = require(collect.js);
const collection = collect({
  firstname: "Michael",
  lastname: "Cera",
});

collection.pull("lastname");
