/**
 * Array Queens
 * 
 * A JavaScript algorithm with arrays of zeros and ones
 * that simulates a bitwise approach to solve the N-Queens problem.
 *
 * The MIT License (MIT)
 * Copyright (c) Alessandro Zanardi
 * 
 */

// N Queens solutions calculator
var calc = function(n) {

  // Blank board generator
  var getBoard = function(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
      arr.push(0);
    }
    return arr;
  };

  // Array helpers
  var arrSum = function(arr1,arr2,arr3) {
    var result = getBoard(n);
    for (var i = 0; i < n; i++) {
      (arr1[i] || arr2[i] || arr3[i]) && (result[i] = 1);
    }
    return result;
  };

  var shiftRight = function(arr) {
    var result = getBoard(n);
    for (var i = 0; i < n; i++) {
      if (i < n-1 && arr[i]) {
        result[i+1] = 1;
      }
    }
    return result;
  };

  var shiftLeft = function(arr) {
    var result = getBoard(n);
    for (var i = 1; i < n; i++) {
      arr[i] && (result[i-1] = 1);
    }
    return result;
  };

  // Board and counters
  var col = getBoard(n);
  var majDiag = getBoard(n);
  var minDiag = getBoard(n);
  var solutions = 0;
  var counter = 0;

  // Recursive inspect
  var inspect = function(col, majDiag, minDiag) {
    var newCol = col.slice(0);
    var newMajDiag = shiftRight(majDiag.slice(0));
    var newMinDiag = shiftLeft(minDiag.slice(0));
    var row = arrSum(newCol, newMajDiag, newMinDiag);
    for (var i = 0; i < n; i++) {
      if (row[i] === 0) {
        newCol[i] = 1;
        counter++;
        newMajDiag[i] = 1;
        newMinDiag[i] = 1;
        if (counter === n) {
          solutions++;
        }
        inspect(newCol, newMajDiag, newMinDiag);
        newCol[i] = 0;
        newMajDiag[i] = 0;
        newMinDiag[i] = 0;
        counter--;
      }
    }
  };
  inspect(col, majDiag, minDiag);
  return solutions;
};