const numbers = [1, 2, 3];
const doubled = numbers.map( n => n * 2);
console.log(doubled);

const ages = [12, 18, 25, 16];
const adults = ages.filter(age => age >= 18)
console.log(adults);

const prices = [10, 20, 30];
const total = prices.reduce((sum, price)=> sum + price, 0);
console.log(total);

const user = { name: "David", age: 20 };
const { name, age} = user;
console.log(name);

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);




