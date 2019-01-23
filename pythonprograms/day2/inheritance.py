class vehicle:
    type="sedan"
    yom=2014
    mileage=5
class bus(vehicle):
    type="coach"
    mileage=3
mybus=bus()
print(mybus.type,mybus.yom,mybus.mileage)
