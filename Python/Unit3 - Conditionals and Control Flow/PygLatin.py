pyg = 'ay'

# the "raw_input()" method can be used to get user input from the command line
original = raw_input('Enter a word:')

# the "isalpha()" method returns True if the argument is a string
if len(original) > 0 and original.isalpha():
    print original
else:
    print 'empty'
    
word = original.lower()
first = word[0]
new_word = word + first + pyg
# we can use indexing to print a specific portion of a string
new_word = new_word[1:len(new_word)]

print new_word