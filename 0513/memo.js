/*
[prototype]
def fibonacci(n):
    if n < 2: 
        return n
    return fibonacci(n-1) + fibonacci(n-2)
*/

function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
[prototype]
def fibonacci(n, memo):
    if n in memo: 
        return memo[n]
    if n < 2: 
        return n
    
    memo[n] = fibonacci(n-1,memo)+fibonacci(n-2,memo)
    return memo[n]
*/

function fibonacci(n, memo) {
    if (memo.hasOwnProperty(n)) return memo[n];
    if (n < 2) return n;

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

