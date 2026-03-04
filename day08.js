// // Square

// function square(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// }

// square(3);
// // console.log(square(4));

// // Rectangle

// function rectangle(rows, cols) {
//   for (let i = 1; i <= rows; i++) {
//     let result = "";
//     for (let j = 1; j <= cols; j++) {
//       result += "* ";
//     }
//     console.log(result);
//   }
// }

// rectangle(9, 16);

// Right triangle

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    let tri = "";
    for (let j = 1; j <= i; j++) {
      tri += "* ";
    }
    console.log(tri);
  }
}

triangle(6);

// Left Triangle

function leftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let left = "";
    for (let space = 1; space <= n - i; space++) {
      left += "  ";
    }
    for (let star = 1; star <= i; star++) {
      left += "* ";
    }
    console.log(left);
  }
}

leftTriangle(7);
