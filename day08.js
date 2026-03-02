// Square
function square(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

console.log("Square Output:");
square(4);

// Rectangle
function rectangle(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < cols; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

console.log("Rectangle Output:");
rectangle(3, 5);

// Right Triangle
function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

console.log("Right Triangle Output:");
rightTriangle(4);

// Left Triangle
function leftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let space = 1; space <= n - i; space++) {
      row += "  ";
    }
    for (let star = 1; star <= i; star++) {
      row += "* ";
    }
    console.log(row);
  }
}

console.log("Left Triangle Output:");
leftTriangle(4);

// Inverted Triangle
function invertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

console.log("Inverted Triangle Output:");
invertedTriangle(4);
