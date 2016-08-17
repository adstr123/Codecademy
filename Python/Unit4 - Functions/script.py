# functions provide reusable code using "def [alias]([arguments]): [code_to_execute]"
def spam():
	# you can include a comment at the start of the function to explain its function
    """Prints 'Eggs!' to the console"""
    print "Eggs!"

# you call the function by typing it and its arguments
spam()

# a function can accept multiple arguments
def power(base, exponent):  # Add your parameters here!
    result = base**exponent
    print "%d to the power of %d is %d." % (base, exponent, result)
	
power(37, 4)

# functions can call other functions
def one_good_turn(n):
    print n + 1
    
def deserves_another(n):
    print one_good_turn(n) + 2
	
# python has a lot of external functions, as long as you import the module
import math
print math.sqrt(25)

# or just the function you want
from math import sqrt
print sqrt(25)

# import the whole module and define the functions you want in advance so you don't have to keep typing them, using the universal import
from math import *

# universal imports include a lot of code you probably won't use. View it all with dir([module])
everything = dir(math)
print everything

# python has built-in, predefined functions you can use without even importing a module, like the string methods (str(), .upper() etc.)
def biggest_number(*args):		# using * in the arguments list means it can accept any undefined number of arguments
    print max(args)

def smallest_number(*args):
	print min(args)

def distance_from_zero(arg):
    print abs(arg)
	
print type("Hello")
print type(5.7)
print type(6)