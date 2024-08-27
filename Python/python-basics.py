#print testing
import math
school="west-mec"
first_name = "Justin"
last_name = "Swenson"
print(first_name, last_name)
#testing type command
print(type(school))
#multilane string test
message = """ This is a multi lane
message using triple quotes"""
print(message)
#testing string conversion
name="justin"
age=16
print(name+" "+str(age))
#testing variable conversion
integer=1
string=" 3 "
boolean= True
print(str(integer)+string+str(boolean))
print(integer-int(string))
print(str(True))
#if statements
age1=23
age2=56
if age2 > 45:
    print("they old")
elif age2<30:
    print("Babies am I right")
else:
    print("they are getting there")
bf="ELi"
thinks_bf="AJ"
#!= means is not equal to
if bf != thinks_bf:
    print("You have friends")
if 15==15:
    print("You can read")
#python doesnt automatically convert variables
if 15=="15":
    print("No")
#need to convert manually for comparisons
if 15==int("15"):
    print("good conversion")
alive=True
year="2024"
number=7
if alive==True and year==str(2024):
    print("yay")
#you could also do nested
if alive==True:
    if year==str(2024):
        print("yay")
money=140
if money>=0 and money<=20:
    print("Broke Netiflix")
elif money>=21 and money<=60:
    print("Movie Theater")
elif money>=61 and money<=80:
    print("Dinner")
else:
    print("Sky diving")
#first_name_input_test = input("what is your first name ")
#print("your name is "+ first_name_input_test)

#pythagorean theorem
#a= float(input("what is the side a of the triangle"))
#b= float(input("what is the side b of the triangle"))
#hytonenuse= math.sqrt(a*a + b*b)
#print("the hypotenuse is " + str(hytonenuse))

x = 14
y = 25
def add_function(num1, num2):
    print(str(num1+num2))
add_function(y, x)


my_name="Justin"
def name_comment(name):
    print(name+" youre amazing")
name_comment(my_name)