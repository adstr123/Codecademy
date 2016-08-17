# you can also save strings of characters (text) in variables
brian = "Hello life!"
print brian

# use escape characters to avoid conflicts with certain characters in strings, like quote marks
print 'This isn\'t flying, this is falling with style!'

# strings are just arrays of characters. So you can access letters with an index
fifth_letter = "MONTY"[4]
print fifth_letter

# we use dot notation when operating on an object (strings are objects). Use methods that take arguments when working with other data types
# get the length of a string using the string method "len()"
parrot = "Norwegian Blue"
print len(parrot)

# transform a string to lower case with the string method ".lower()"
print parrot.lower()

# transform a string to upper case with the string method ".upper()"
print parrot.upper()

# cast non-strings to a string with the method "str()"
pi = 3.14
print str(pi)

# concatenate strings with "+"
print "Spam " + "and " + "eggs"

# replace variables in strings with % instead of concatenating. You need the same number of variables as you do % signs in the string
string_1 = "Camelot"
string_2 = "place"

print "Let's not go to %s. 'Tis a silly %s." % (string_1, string_2)