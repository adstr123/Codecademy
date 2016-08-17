# iterate over a dictionary in an unordered fashion with ".items()"
my_dict = {
    "Name": "Adam",
    "Age": 21,
    "Cool": True
}
print my_dict.items()

# return an unordered list of keys with ".keys()" and an unordered list of values with ".values()"
my_dict = {
    "Name": "Adam",
    "Age": 21,
    "Cool": True
}
print my_dict.keys()
print my_dict.values()

# yforce Python to continue printing on the same line with a trailing comma
for number in range(5):
    print number,
	
# use list comprehension to build elegant "for" loops, using "[[desired_output] for [iterator] in range(X:Y) if ([condition])"
doubles_by_3 = [x*2 for x in range(1,6) if (x*2) % 3 == 0]
even_squares = [x**2 for x in range(1,12) if (x**2) % 2 == 0]
cubes_by_four = [x**3 for x in range(1,11) if (x**3) % 4 == 0]
print doubles_by_3
print even_squares
print cubes_by_four

# list slice using [start:end:stride]
l = [i ** 2 for i in range(1, 11)]	# Should be [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
print l[2:9:2] # prints every second element between the 2nd & 9th elements

# you can even use a negative stride to iterate backwards
letters = ['A', 'B', 'C', 'D', 'E']
print letters[::-1]

# Python is a functional programming language, so you can create anonymous functions and pass them round like variables
my_list = range(16)								# construct a range to filter within
print filter(lambda x: x % 3 == 0, my_list)		# "lambda" generates the anonymous function. This serves as the parameter on which to filter

languages = ["HTML", "JavaScript", "Python", "Ruby"]
print filter(lambda x: x == "Python", languages)

garbled = "IXXX aXXmX aXXXnXoXXXXXtXhXeXXXXrX sXXXXeXcXXXrXeXt mXXeXsXXXsXaXXXXXXgXeX!XX"

message = filter(lambda x: x != "X", garbled)
print message

# combine list comprehension & functional programming for powerful, elegant code
squares = [x**2 for x in range(1,11)]
print filter(lambda x: 30 < x <= 70, squares)