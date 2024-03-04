function generateCombinations(n, k) {
    let currentCombination = []; // stores a single combination being built
    let allCombinations = []; // array to hold all found combinations
    let currentValue = 1; // tracks the current value being considerd

    function findCombinatons() {
        // base case:
        if(currentCombination.length === k) {
            // we have a complete combination of size k
            allCombinations.push([...currentCombination]); // add a *copy* to results
            return;
        };
        if(currentValue > n) {
            // no more values to add
            return;
        }

        // choice 1: include current value
        currentCombination.push(currentValue++); // add a currentValue and increment
        findCombinatons(); // explore posibilities with this choice

        // choice 2: exclude currentValue
        currentCombination.pop(); // remove currentvalue (backtracking)
        findCombinatons(); // explore without choice
        currentValue--; // asjust for backtracking
    };

    findCombinatons(); // start recursive process
    return allCombinations; // return the collected combinations
};

let combinations = generateCombinations(3, 2); // call with n = 3, k = 2
console.log(combinations); // output: [[1,2], [1, 3], [2, 3]];