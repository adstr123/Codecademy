# you can define a list datatype to store a collection of different types of data using "alias = [element1, element2...]"

zoo_animals = ["pangolin", "cassowary", "sloth", "tiger"];

# lists are acessible by index like arrays (which are just thin wrappers on C arrays and can only hold one type of data)

if len(zoo_animals) > 3:
	print "The first animal at the zoo is the " + zoo_animals[0]
	print "The second animal at the zoo is the " + zoo_animals[1]
	print "The third animal at the zoo is the " + zoo_animals[2]
	print "The fourth animal at the zoo is the " + zoo_animals[3]
	
# reassign list elements just like any other variable
zoo_animals[2] = "hyena"
print zoo_animals[2]

# add items to a list with ".append()" method  (lists are mutable)
suitcase = [] 
suitcase.append("sunglasses")
print suitcase

# remove an item with ".remove()" method
zoo_animals.remove("cassowary")

# list slice like with a string, using "list_alias[start_slice_index:end_slice_index]"
suitcase = ["sunglasses", "hat", "passport", "laptop", "suit", "shoes"]
print suitcase[0:2]
print suitcase[:2]

# find an index of an element with ".index()" method
animals = ["aardvark", "badger", "duck", "emu", "fennec fox"]
print = animals.index("duck")

# insert an element in a specific place with ".insert()" method
animals.insert(duck_index, "cobra")

# "for" loops iterate through lists using "for [variable] in [list]"
my_list = [1,9,3,8,5,7]

for number in my_list:
    print 2*number
	
# sort a list with ".sort()" method
print my_list.sort()

# you can define a dictionary datatype to store a collection of data plus their keys using "alias = {key1 : element1, key2 : element2}"
residents = {'Puffin' : 104, 'Sloth' : 105, 'Burmese Python' : 106}
print residents['Puffin']

# add items to a dictionary with dict_name[new_key] = new_value (dictionaries are mutable)
menu = {}
menu['Chicken Alfredo'] = 14.50
print menu['Chicken Alfredo']

# remove an item with "del"
del residents['Sloth']

# reassign dictionary values by specifying the key "dict_name[key] = new_value"
zoo_animals['Burmese Python'] = 999