class Car:
    model="sedan"
    def __init__(self,model,color):
        self.model=model
        self.color=color
mCar1=Car("Maruti","Blue")
mCar2=Car("Suzuki","Red")
print(mCar1.model,mCar1.color)