"use strict";

function createIntersectionArrays(ferstArr, secondArr) {
  const arr = new Set(ferstArr);
  const arr2 = new Set(secondArr);
  const result = arr2.filter((item) => arr.has(item));
  console.log(result);
}
createIntersectionArrays([1, 2, 3, 4], [3, 4, 5, 6]);

// повинно повертати [3, 4]
