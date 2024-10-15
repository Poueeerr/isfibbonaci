function fibonacci(num) {
    if (num < 0) return false; 

    let a = 0, b = 1;
    
    if (num === a || num === b) {
        return true;
    }
    let prox = a + b;

    while (prox <= num) {
        prox === num ? true: 
        
        a = b;
        b = prox;
        prox = a + b;
    }

    return false; 
}

const num = 21; 
if (fibonacci(num)) {
    console.log(`${num} pertence`);
} else {
    console.log(`${num} não pertence`);
}
