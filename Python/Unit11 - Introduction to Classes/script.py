# you can create classes in Java for OOP
class Animal(object):			# we inherit from the "object" object
    def __init__(self, name):	# we define a function to initialize the object, with an additional parameter
        self.name = name		# we define the additional parameter

zebra = Animal("Jeffrey")		# we create an instance of the "Animal" object
print zebra.name				# we print our instance's "name" attribute

# there are different types of variables in a class

class Animal(object):
    """Makes cute animals."""
    is_alive = True					# this is a member variable and is available to all instances of this class
    def __init__(self, name, age):
        self.name = name			# these are instance variables as they are specific to this instance of the object
        self.age = age

zebra = Animal("Jeffrey", 2)		# we only pass arguments for instance variables - the instance is automatically a member of the "Animal" class and therefore has its member variable initialized

# a class has methods as well as variables
    class Animal(object):
    """Makes cute animals."""
    is_alive = True					
    def __init__(self, name, age):
        self.name = name			
        self.age = age
	def description(self):
        print self.name
        print self.age
		
hippo = Animal("Haley", 12)
hippo.description()

# objects can "inherit" methods and variables from parent objects, representing an "is-a" relationship
class Customer(object):
    """Produces objects that represent customers."""
    def __init__(self, customer_id):
        self.customer_id = customer_id

    def display_cart(self):
        print "I'm a string that stands in for the contents of your shopping cart!"

class ReturningCustomer(Customer):
    """For customers of the repeat variety."""
    def display_order_history(self):
        print "I'm a string that stands in for your order history!"

monty_python = ReturningCustomer("ID: 12345")
monty_python.display_cart()
monty_python.display_order_history()

# Methods can be redefined in children to "override". Alternatively a child with an overriden method can call the original parent method using the "super()" call
class Employee(object):
    """Models real-life employees!"""
    def __init__(self, employee_name):
        self.employee_name = employee_name

    def calculate_wage(self, hours):
        self.hours = hours
        return hours * 20.00

class PartTimeEmployee(Employee):
    def calculate_wage(self, hours):
        self.hours = hours
        return hours * 12.00
    
    def full_time_wage(self, hours):
        return super(PartTimeEmployee, self).calculate_wage(hours)

milton = PartTimeEmployee("Milton")
print milton.full_time_wage(10)