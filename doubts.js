const result = 7 + "10";

console.log(typeof result);

/////////////////////////////////////////////////////////////////////////////////////

const outer = () => {
  let count = 0;

  return () => {
    // count = count + 1 = 1+1 = 2
    count++;

    return count;
  };
};

const data = outer();

console.log(data());
console.log(data());
console.log(data());

count = 12;

console.log(count);

b = 55;
console.log(b);

const aFunction = () => {
  let a = 25;
  console.log(a);
  if (a === 25) {
    return "ok";
  } else {
    return "not ok";
  }
};

a = 3333;

console.log(a);
