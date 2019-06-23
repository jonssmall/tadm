const swap = require('../swap');

function insertionSort(s) {
    for (let i = 1; i < s.length; i++) {
        let j = i;
        while ((j > 0) && (s[j] < s[j-1])) {
            swap(s, j, j-1);
            j = j-1;
        }
    }
    return s;
}

console.log(insertionSort("INSERTIONSORT".split('')));
