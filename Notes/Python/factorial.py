import math

n = input("Please input a whole number: ")

try:
    int(n)
except:
    n=input("Please input A whole number: ")

n=int(n)
nFactorial = math.factorial(n)
print(str(n) + " factorial is " +str(nFactorial))