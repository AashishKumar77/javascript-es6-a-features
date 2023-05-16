// const num = [1, 4, 9, 16];
// const map1 = num.map((x) => x * 3);

// console.log(map1);

const map2 = new Map();

map2.set("a", 1);
map2.set("b", 2);
map2.set("c", 3);

console.log(map2.get("a"));

map2.set("a", 97);

console.log(map2.get("a"));

console.log(map2.size);

map2.delete("b");

console.log(map2.size);
