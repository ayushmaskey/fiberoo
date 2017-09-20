
function fib() {
  let first = 0;
  let second = 1;
  let third = 0;
  const list = [0, 1];
  let count = 2;
  while (count < 100) {
    third = first + second;
    first = second;
    second = third;
    list.push(third);
    count++;
  }
  return list;
}


function numsToStrings(array) {
  return _.map(array, function (num) { return num.toString(); });
}

console.log(numsToStrings(fib()));


console.log(fib());

function numEvenNums(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(numEvenNums(fib()));
