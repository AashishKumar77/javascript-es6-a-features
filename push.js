// example 1
const cars = ["Alto", "Duster", "Swift"];

const newcar = cars.push("XUV");
console.log(cars);

// example 2 merging two arrays

const cities = ["Mumbai", "Chandigarh", "Mohali", "Solan"];
const morecities = ["Shimla", "Goa", "Delhi", "Manali"];

cities.push(...morecities);
console.log(cities);

// example 3 multi items push

const brands = ["Adidas", "Lewis", "Blackberry"];
const morebrand = ["Sketchers", "Woodland", "Octave"];
brands.push(...morebrand, "redbull", "Audi", "Shopify");
console.log(brands);
