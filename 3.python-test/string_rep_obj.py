class Car:
    max_speed = 0
    speed_units = ""

    # def __init__(self, max_speed, speed_units):
    #     # body of the constructor
    #     self.speed_units = speed_units
    #     self.max_speed = max_speed
    #     print("Car with the maximum speed of " + str(self.max_speed) + " " + self.speed_units) 

    def __new__(cls, max_speed, speed_units):
        cls.speed_units = speed_units
        cls.max_speed = max_speed
        return "Car with the maximum speed of " + str(cls.max_speed) + " " + cls.speed_units




class Boat:
    max_speed = 0

    # def __init__(self, max_speed):
    #     self.max_speed = max_speed
    #     print("Boat with the maximum speed of " + str(self.max_speed) + " knots")

    def __new__(cls, max_speed):
        cls.max_speed = max_speed
        print("Boat with the maximum speed of " + str(cls.max_speed) + " knots")


vehicle = Car(130, "km/h")
print(vehicle)


vehicle = Boat(77)
print(vehicle)