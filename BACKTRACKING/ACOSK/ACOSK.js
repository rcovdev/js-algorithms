// ALL COMBINATIONS OF SIZE K.

const generateCombinations = (n, k) => {
    let currentCombination = [];
    let allCombinations = [];
    let currentValue = 1;

    function findCombinations() {
        if(currentCombination.length === k) {
            allCombinations.push([...currentCombination]);
            return;
        };
        if(currentValue > n) {
            return;
        };

        currentCombination.push(currentValue++);
        findCombinations();
        currentCombination.pop();
        findCombinations();
        currentValue--;
    };
    findCombinations();

    return allCombinations;
};

let result = generateCombinations(5, 3);
console.log(result);