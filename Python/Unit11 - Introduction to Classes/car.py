class Car(object):
    condition = "new"
    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg   = mpg
    
    def display_car(self):
        return "This is a " + self.color + " " + self.model + " with " + str(self.mpg) + " MPG."
        
    def drive_car(self):
        self.condition = "used"

class ElectricCar(Car):
    def __init__(self, model, color, mpg, battery_type):
        self.battery_type = battery_type
        self.model = model
        self.color = color
        self.mpg   = mpg
    
    def drive_car(self):
        self.condition = "like new"

my_car = Car("DeLorean", "silver", 88)
print my_car.condition
my_car.drive_car()
print my_car.condition

my_car = ElectricCar("Tesla", "black", 150, "molten salt")
print my_car.condition
my_car.drive_car()
print my_car.condition

# a more real world class used in 3D graphics
class Point3D(object):
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z
    
    def __repr__(self):
        return "(%d, %d, %d)" % (self.x, self.y, self.z)

my_point = Point3D(1, 2, 3)
print my_point