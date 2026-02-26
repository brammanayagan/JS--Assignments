// 1️⃣
// Create an empty array called cart.
// Add 3 product names using push().
// Remove the last product using pop().
// Print final cart and removed item.

let cart = [];

cart.push("Mobile");
cart.push("Laptop");
cart.push("Headset");

let removedItem = cart.pop();

console.log("Final Cart:", cart);
console.log("Removed Item:", removedItem);

// 2️⃣
// Create an array [10, 20, 30, 40].
// Remove the first element using shift().
// Add 5 at the beginning using unshift().

let arr1 = [10, 20, 30, 40];

arr1.shift();
arr1.unshift(5);

console.log("Updated Array:", arr1);

// 3️⃣
// Create an array of skills.
// Check if "React" exists using includes().
// If not present, add it.

let skills = ["HTML", "CSS", "JavaScript"];

let isInclude = skills.includes("React");
console.log("isInclude", isInclude);

skills.push("React");

console.log("Skills:", skills);

// 4️⃣
// Given array [1, 2, 3, 4, 5]
// Use slice() to create a new array containing only middle 3 elements.

let sliceArr = [1, 2, 3, 4, 5];

let middle = sliceArr.slice(1, 4);

console.log("Middle Elements:", middle);

// 5️⃣
// Given [1, 2, 3, 4, 5]
// Use splice() to remove 3 and 4.
// Then insert 100 and 200 at that position.

let spliceArr = [1, 2, 3, 4, 5];

spliceArr.splice(2, 2, 100, 200);

console.log("After Splice:", spliceArr);

// 6️⃣
// Combine two arrays [1,2] and [3,4] using concat().

let a = [1, 2];
let b = [3, 4];

let combined = a.concat(b);

console.log("Combined Array:", combined);

// 7️⃣
// Convert ["JS", "React", "Node"] into a single string separated by " - " using join().

let tech = ["JS", "React", "Node"];

let joined = tech.join(" - ");

console.log("Joined String:", joined);

// 8️⃣
// Sort an array of numbers in ascending and descending order properly.

let numbers = [5, 2, 9, 1];

numbers.sort((a, b) => a - b);
console.log("Ascending:", numbers);

numbers.sort((a, b) => b - a);
console.log("Descending:", numbers);

// 9️⃣
// Reverse an array without creating a new variable.

let reverseArr = [1, 2, 3, 4];

reverseArr.reverse();

console.log("Reversed Array:", reverseArr);

// 🔟
// Find index of a specific value in an array.
// If not found, print "Not Found".

// 🔵 SECTION 2 – Higher Order Array Methods Tasks

// 1️⃣1️⃣ map()
// Given [1,2,3,4]
// Create a new array where each number is multiplied by 5.

let mapArr = [1, 2, 3, 4];

let multiplied = mapArr.map((num) => num * 5);

console.log("Multiplied by 5:", multiplied);

// 1️⃣2️⃣ map() (Object)
// Given:
// [
//  { name: "Sudhan", age: 22 },
//  { name: "Ravi", age: 25 }
// ]

// Return a new array containing only names.

let users = [
  { name: "Sudhan", age: 22 },
  { name: "Ravi", age: 25 },
];

let names = users.map((user) => user.name);

console.log("User Names:", names);

// 1️⃣3️⃣ filter()
// Given [10, 15, 20, 25, 30]
// Return only numbers greater than 20.

let filterArr = [10, 15, 20, 25, 30];

let greaterThan20 = filterArr.filter((num) => num > 20);

console.log("Greater than 20:", greaterThan20);

// 1️⃣4️⃣ filter() (Object)
// From a product array, filter products whose price is above 10000.

let products = [
  { name: "Mobile", price: 10000 },
  { name: "Laptop", price: 50000 },
  { name: "Headset", price: 2000 },
];

let expensiveProducts = products.filter((p) => p.price > 10000);

console.log("Products above 10000:", expensiveProducts);

// 1️⃣5️⃣ reduce() (Sum)
// Find total of [100, 200, 300].

let sumArr = [100, 200, 300];

let total = sumArr.reduce((acc, curr) => acc + curr, 0);

console.log("Total Sum:", total);

// 2️⃣1️⃣ Cart System
// Given:
// [
//  { name: "Mobile", price: 10000 },
//  { name: "Laptop", price: 50000 },
//  { name: "Headset", price: 2000 }
// ]

// Tasks:

// Get all product names.

// Filter products above 5000.

// Calculate total price.

// Check if any product below 3000 exists.

let cartProducts = [
  { name: "Mobile", price: 10000 },
  { name: "Laptop", price: 50000 },
  { name: "Headset", price: 2000 },
];

let productNames = cartProducts.map((p) => p.name);
console.log("Product Names:", productNames);

let above5000 = cartProducts.filter((p) => p.price > 5000);
console.log("Above 5000:", above5000);

let totalPrice = cartProducts.reduce((acc, p) => acc + p.price, 0);
console.log("Total Price:", totalPrice);

let anyBelow3000 = cartProducts.some((p) => p.price < 3000);
console.log("Any Product Below 3000:", anyBelow3000);

// 2️⃣2️⃣ Student Marks System
// Given student marks array:

// Get all marks above 70.

// Check if all students passed (>= 35).

// Find first failed student.

// Calculate average mark.

let marks = [80, 45, 90, 30, 60];

let above70 = marks.filter((m) => m > 70);
console.log("Marks Above 70:", above70);

let allPassed = marks.every((m) => m >= 35);
console.log("All Passed:", allPassed);

let firstFailed = marks.find((m) => m < 35);
console.log("First Failed Mark:", firstFailed);

let average = marks.reduce((a, b) => a + b, 0) / marks.length;
console.log("Average Mark:", average);

// 2️⃣3️⃣ Remove Duplicates
// Given [1,2,2,3,4,4,5]
// Remove duplicates using higher order method.

// 2️⃣4️⃣ Group By Age
// From an array of user objects, group users by age using reduce().

// 2️⃣5️⃣ Flatten Array
// Convert [[1,2], [3,4], [5]] into [1,2,3,4,5] using reduce().
