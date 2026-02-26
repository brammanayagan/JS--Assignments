// day 01 array

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] % 2 === 0) {
    console.log("Even Numbers are: ", array1[i]);
  }
}

// day 02 for loop

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 2000);
}

// day 03 for loop

let arr = [866, 32548, 54, 66, 915, 18];

function findSmallestNumber() {
  let smallNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallNum) {
      smallNum = arr[i];
    }
  }
  return smallNum;
}

console.log(findSmallestNumber([866, 32548, 54, 66, 915, 18]));
