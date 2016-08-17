# there are six basic comparators in Python:
print 17 < 328			# less than
print 345 > 25			# more than
print 100 == (2 * 50)	# equal to
print 99 != (98 + 1)	# not equal to
print 19 <= 19			# less than or equal to
print -22 >= -18		# more than or equal to

""" boolean operators (and, or, not):
True and True is True
True and False is False
False and True is False
False and False is False

True or True is True
True or False is True
False or True is True
False or False is False

not True is False
not False is True
"""

# an "if" statement can be used to choose between two different paths using "if (some_condition/boolean): [code_to_execute]"
if "life" == "life":
    print "Success #1"
	
if 45:
    print "Success #2"
	
# an "else" statement can help clarify the second path using "if (some_condition/boolean): [code_to_execute] else: [alternative_code_to_execute]"
answer = "'Tis but a scratch!"

if answer == "'Tis but a scratch!":
    print True
else:             
    print False
		
# an "elif" (else if) statement can be used to define further paths using "if (some_condition/boolean): [code_to_execute] elif: [alternative_code_to_execute] else: [fallback_code_to_execute]"
answer = 3

if answer > 5:
    return 1
elif answer < 5:          
    return -1
else:
    return 0