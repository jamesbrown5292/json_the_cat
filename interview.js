let board = [[null,0,0,1],[0,null,null,null],[0,null,null,null],[1,null,null,null]];

const print = (board) => {
  for (let row of board) {
    let line = "|";
    for (let column of row) {
      if (column === 0) {
        line += "O";
      } else if (column === 1) {
        line += "X";
      } else if (column === null) {
        line += " ";
      }
      line += "|";
    }
    console.log(line);
  }
}

print(board);


//Print numbers 1-100; every multiple of 3 should be replaced with fizz; 5- buzz' 3 & 5; fizzbuzz

const printNumbers = () => {
  //for loop from 1 - 100; if statements nested to check number % 3 === 0 / % 5 === 0 / both
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}