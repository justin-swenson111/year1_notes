'''
WHAT IS PYTHON
Python is a high-level, general-purpose, and very popular programming language. Python programming language (latest Python 3) is being used in web development, Machine Learning applications, along with all cutting-edge technology in Software Industry.

Python language is being used by almost all tech-giant companies like - Google, Amazon, Facebook, Instagram, Dropbox, Uber… etc.

The biggest strength of Python is huge collection of standard library which can be used for the following:

Machine Learning
GUI Applications (like Kivy, Tkinter, PyQt etc. )
Web frameworks like Django (used by YouTube, Instagram, Dropbox)
Image processing (like OpenCV, Pillow)
Web scraping (like Scrapy, BeautifulSoup, Selenium)
Test frameworks
Multimedia
Scientific computing
Text processing and many more..

Python is currently the most widely used multi-purpose, high-level programming language, which allows programming in Object-Oriented and Procedural paradigms. Python programs generally are smaller than other programming languages like Java. Programmers have to type relatively less and the indentation requirement of the language, makes them readable all the time.
'''
'''PYTHON COMMENTS and Rules for all of programming
Rule 1: Comments should not duplicate the code.
Rule 2: Good comments do not excuse unclear code.
Rule 3: If you can't write a clear comment, there may be a problem with the code.
Rule 4: Comments should dispel confusion, not cause it.
Rule 5: Explain unidiomatic code in comments.
Rule 6: Provide links to the original source of copied code.
Rule 7: Include links to external references where they will be most helpful.
Rule 8: Add comments when fixing bugs.
Rule 9: Use comments to mark incomplete implementations.

# is a single line comment
Anything between '''''' is a single to multiple line comment
'''

'''VARIABLES: Variables do not need to be declared with any particular type, and can even change type after they have been set. Just start with a initial value or not

VARIABLE NAMES: A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume). Rules for Python variables:
***A variable name must start with a letter or the underscore character
***A variable name cannot start with a number
***A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
***Variable names are case-sensitive (age, Age and AGE are three different variables)
***A variable name cannot be any of the Python keywords.
MULTI VARIABLE CREATION:
#f_name,l_name,age = "Khadeem","Bernard", 21
print(f_name,l_name,age) or print(f_name+l_name+age)

or
#initialValue = start = i = 0

CASTING VARIABLES:If you want to specify the data type of a variable, this can be done with casting.
'''
'''PYTHON DATATYPES:
Python has the following data types built-in by default, in these categories:

Text Type:  str
Numeric Types:  int, float, complex
Sequence Types: list, tuple, range
Mapping Type:   dict
Set Types:  set, frozenset
Boolean Type:   bool
Binary Types:   bytes, bytearray, memoryview
None Type:  NoneType
'''

'''Python Indentation
Indentation refers to the spaces at the beginning of a code line.

Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.

Python uses indentation to indicate a block of code.'''

'''Python String Manipulations
String slicing: returns a piece of a string that is dictated by the inputs
EX.'''

# test= "This is a test string in Python"
# print(test[5]) #How to access a charcter in a string
# print(test[15:32]) #how to access a range of character in a string

'''String methods'''

# print(test.upper()) #uppercase letters
# spacey = "   This has a lot of spacey before and after    "
# print(spacey.strip().upper())
# location = spacey.find('before')
# print(spacey[location:(location*6)])

'''String Concatenation'''

# print(test + " " + spacey)
# name = 'take 5'
# amount = 10
# cost = 20
# statements = "I had my favorite candy {0}, I bought a toal of {1} for ${2}"
# print(statements.format(name,amount,cost))

# Need to finish string quotes using the escape character

'''conditionals for Python'''

import math
x = 23
last_name = "Bernard"
first_name= "Tyrant"
age = 16
fake_age = "25"
patience = -25
verbal_abuse = 100
kenny_is_alive = False
if (kenny_is_alive and age>25) or kenny_is_alive == False:
    print("This is what you are doing this is what I want you to do")
if last_name == "Bernard" or last_name== "tyrant":
    print("You arrr lucky pirates")
if last_name == "Bernard" and first_name== "Tyrant":
    print("Its over for you")
if age>20:
    print("You Old")
    age +=1
elif age==19:
    print("Your BDay last year was cool")
else:
    print("gerneration of Social Goblins")
    age = 19
if first_name =="Bernard":
    print("NO")
if not kenny_is_alive:
    print("Kenny WHYYYYY")
print("Khadeem Bernard")


