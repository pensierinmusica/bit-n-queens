// N Queens solutions calculator
var calc = function(n) {

  // Board and counters
  var boardLimit = 0<<n;
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
    for (var i = 0; i <= boardLimit; i<<1) {
      // ** Still need to figure out this part - the rest should be ok **
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

// console.log(calc(8));


