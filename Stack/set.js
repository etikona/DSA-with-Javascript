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

//* Subset
const isSubset = (setA, setB) => {
  return [...setA].every((item) => setB.has(item));
};
const setC = new Set([1, 2]);
const setD = new Set([1, 2, 3]);

// console.log(isSubset(setC, setD));
// console.log(isSubset(setA, setB));

//* Symmetric Difference
const symmetricDifference = (setA, setB) => {
  const diffA = [...setA].filter((item) => !setB.has(item));
  const diffB = [...setB].filter((item) => !setA.has(item));
  return new Set([...diffA, ...diffB]);
};
const symmetricDiffSet = symmetricDifference(setA, setB);
console.log(symmetricDiffSet);
