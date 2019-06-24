function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        const x = power(base, Math.floor(exponent / 2));
        if (exponent % 2 === 0) {
            return x * x;
        } else {
            return base * x * x;
        }
    }
}

console.log(power(3, 4));