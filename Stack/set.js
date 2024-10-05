// * Union
const union = (setA, setB) => {
  return new Set([...setA, ...setB]);
};
// * Example Usage
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const unionSet = union(setA, setB);
// console.log(unionSet);

// * Intersection
const intersection = (setA, setB) => {
  return new Set([...setA].filter((item) => setB.has(item)));
};

// Example Usage:
const intersectionSet = intersection(setA, setB);
console.log(intersectionSet);
