import math

string_input=input("Please type a string with upper and lower case characters:")
print(string_input)

lower_string = string_input.upper()
print("lowercase: "+lower_string)

upper_string = string_input.lower()
print("UPPERCASE: "+upper_string)

reverse_string = string_input[::-1]
print("Reverse: "+reverse_string)

replace_string=string_input
bad_char = ["a","e","i","o","u","A","E","I","O","U"]
for char in bad_char:
    replace_string = replace_string.replace(char,"*")
print(""+replace_string)

print("Characters: "+ str(len(string_input)))



num1=float(input("please input a number:"))
num2=float(input("please input another number:"))
print("{} + {} = {}".format(num1,num2,(num1+num2)))
print("{} - {} = {}".format(num1,num2,(num1-num2)))
print("{} * {} = {}".format(num1,num2,(num1*num2)))
print("{} / {} = {}".format(num1,num2,(num1/num2)))
print("{} ^ {} = {}".format(num1,num2,(num1**num2)))
print("{} % {} = {}".format(num1,num2,(num1%num2)))



first_name=input("What is your first name: ")
last_name=input("What is your last name: ")
fav_num=float(input("Welcome {} {}, what is your favorite number: ".format(first_name,last_name)))
print("{} {} favorite number: {}".format(first_name,last_name,fav_num))



def greet(name):
    print("welcome "+name)
def calc_area(length, width):
    print("area of a rectangle with side {} and side {} is {}".format(length,width,(length*width)))
def convert_degree(degree):
    print("{} degrees farenheit".format((degree-32)*(5/9)))

greet(first_name)

val1=float(input("choose the length of a rectangle:"))
val2=float(input("choose the width of a rectangle:"))
calc_area(val1,val2)

celcius = float(input("Choose a temperature in celcius:"))
convert_degree(celcius)