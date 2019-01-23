class Person:
    def __init__(self,name,age,cgpa):
        self.name=name
        self.age=age
        self.cgpa=cgpa
student=Person('sas',23,6)
print(student.name,student.age,student.cgpa)