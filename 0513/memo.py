def fibonacci(n):
    if n < 2: 
        return n
    return fibonacci(n-1) + fibonacci(n-2)

'''
def fibonacci(n, memo):
    if n in memo: 
        return memo[n]
    if n < 2: 
        return n
    
    memo[n] = fibonacci(n-1,memo)+fibonacci(n-2,memo)
    
    return memo[n]
''' 

print(fibonacci(2))