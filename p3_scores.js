// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a)
const odd = scores.filter((score) => score % 2 !== 0);
console.log("odd:", odd);

const doubled = odd.map((score) => score * 2);
console.log("doubled:", doubled);

const sorted = doubled.sort((a, b) => b - a);
console.log("sorted:", sorted);

const half = sorted.slice(0, Math.ceil(sorted.length / 2));
console.log("first half:", half);

// (b)
const result = scores.filter((score) => score % 2 !== 0).map((score) => score * 2).sort((a, b) => b - a).slice(0, Math.ceil(sorted.length / 2));
console.log("result:", result);

// (c)
console.log("original scores:", scores);
// original scores are still the same
// because the methods(filter, map, sort, slice) don't modify the original array. instead they return a new array.