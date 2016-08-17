# import modules to use external Python code with "from [module] import [attribute/method] as [alias]"
from datetime import datetime

# the "now()" variable in datetime gets the current date and time
now = datetime.now()
print now

# get elements of the date more specific methods
print now.year
print now.month
print now.day

# use string substitution to reformat dates/times
print '%s/%s/%s' % (now.month, now.year, now.day)
print '%s:%s:%s' % (now.hour, now.minute, now.second)