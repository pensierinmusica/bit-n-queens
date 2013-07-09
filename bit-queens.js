/**
 * Bit Queens
 * 
 * A JavaScript bitwise algorithm to solve the N-Queens problem.
 * 
 * The MIT License (MIT)
 * Copyright (c) Alessandro Zanardi
 * 
 */

// N Queens solutions calculator
var calc = function(n) {

  // Check correct input
  if (typeof n !== 'number' || n <= 0) {
    return 'The board must have a size greater or equal to 1';
  }

  // Board and counters
  var boardLimit
  n === 1 ? boardLimit = 0 : boardLimit = 1 << n-1;
  var col = 0;
  var majDiag = 0;
  var minDiag = 0;
  var solutions = 0;
  var counter = 0;

  // Recursive inspect
  var inspect = function(col, majDiag, minDiag) {
    var newCol = col;
    var newMajDiag = majDiag >>> 1;
    var newMinDiag = minDiag << 1;
    var row = newCol | newMajDiag | newMinDiag;
    for (var i = 1; i <= boardLimit; i = i << 1) {
      if (~row & i) {
        newCol = newCol | i;
        counter++;
        newMajDiag = newMajDiag | i;
        newMinDiag = newMinDiag | i;
        if (counter === n) {
          solutions++;
        }
        inspect(newCol, newMajDiag, newMinDiag);
        newCol = newCol & ~i;
        newMajDiag = newMajDiag & ~i;
        newMinDiag = newMinDiag & ~i;
        counter--;
      }
    }
  };
  inspect(col, majDiag, minDiag);
  return solutions;
};