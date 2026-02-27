let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log([...arr]);
console.log(...arr);
console.log({ ...arr });

let stringArray = ["Bramma", "Raj", "Vishwa"];

let copy = [...stringArray];
console.log("copy", copy);

let adding = [...stringArray, "vijay", "Raghu"];

let stringArray2 = ["Priyan", "Mugund"];

let merging = [...stringArray, ...stringArray2];

let obj = {
  name: "Bramma",
  age: 23,
};

// obj.age = 24;

const spread = { ...obj, age: 24 }; //IMPORTANT in React
