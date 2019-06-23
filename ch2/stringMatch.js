function stringMatch(pattern, text) {
    const m = pattern.length;
    const n = text.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        
        while (j < m && text[i + j] === pattern[j]) {            
            j += 1;
        }

        if (j === m) return i;
    }

    return -1;
}

console.log(stringMatch("world", "hello world"));
