//example 1
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);

//exmaple 2
let student = [
  { name: "Rachel", marks: 78 },

  { name: "David", marks: 98 },

  { name: "Aakash", marks: 14 },

  { name: "Franklin", marks: 55 },

  { name: "Ricky", marks: 33 },
];

let finalresult = student.filter((pass) => pass.marks > 33);

console.log(finalresult);

//example 3
let employee = [
  { name: "Chandler", position: "manager" },
  { name: "Monica", position: "chef" },
  { name: "Joey", position: "actor" },
  { name: "Ross", position: "developer" },
  { name: "Phobee", position: "singer" },
  { name: "Damon", position: "Java developer" },
  { name: "Stefan", position: "Php developer" },
];
let actor = employee.filter((member) => member.position == "actor");
let manager = employee.filter((member) => member.position == "manager");

console.log(actor, manager);
