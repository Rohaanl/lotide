const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }


};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS