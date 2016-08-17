# we know the cost of our meal, tax charged, and how much we want to give as a tip, so save these as variables
meal = 44.50
tax = 0.0675
tip = 0.15

# perform maths to work out totals
meal = meal + meal * tax
total = meal + (meal * tip)

# output the final amount, formatted to display only two decimal places
print("%.2f" % total)