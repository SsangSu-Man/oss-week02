// P2. Diamond  (commit: "p2: diamond")
//
// node p2_diamond.js 5   prints a 5-wide diamond of '*'.
// n comes from process.argv[2]. Default: 5. Use only odd n.
//
//   *
//  ***
// *****
//  ***
//   *

const n = Number(process.argv[2] ?? 5);

if (n % 2 === 0) {
    console.log("Number is not odd.");
    process.exit(1);
}

let spaces = Math.floor(n / 2);
let stars = 1;

for (let i = 0; i < n; i++) {
    console.log(" ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces));

    if (i < Math.floor(n / 2)) {
        spaces--;
        stars += 2;
    } else {
        spaces++;
        stars -= 2;
    }
}

// TODO: print the diamond with for / if and console.log.
// Hint: for row i, count the spaces and the stars separately.
// Hint: "*".repeat(3) gives "***".
