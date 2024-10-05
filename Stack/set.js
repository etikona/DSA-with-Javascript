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
const intersectionSet = intersection(setA, setB);
// console.log(intersectionSet);

// * Difference
const difference = (setA, setB) => {
  return new Set([...setA].filter((item) => !setB.has(item)));
};

const differenceSet = difference(setA, setB);
// console.log(setA, setB);
