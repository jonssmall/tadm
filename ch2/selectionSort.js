const swap = require('../swap');

function selectionSort(s) {
    let min;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        min = i;
        for(let j = i+1; j < n; j++) {
            if (s[j] < s[min]) {
                min = j;
            }
        }
        swap(s, i, min);        
    }
    return s;
}

console.log(selectionSort("SELECTIONSORT".split('')));