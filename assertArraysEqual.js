
function eqArrays(a, b) {
  let value = true;
  if (a.length != b.length) 
  return false;
  else {
    for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i])
    return false;
    }
    return value;
    console.log(value);

  }
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${array1} !== ${array2}`);
  }
}


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);