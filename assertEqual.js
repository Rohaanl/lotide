const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("⛔⛔⛔Assertion Failed: " + actual + " !== " + expected);
  }


};

assertEqual("Bootcamp", "Bootcamp");
assertEqual("Yes", "yes");
assertEqual(333, 333);
assertEqual(22, 33);