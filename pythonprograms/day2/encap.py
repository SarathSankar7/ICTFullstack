class Employee:
        name='sarath'
        age=23
        basicpay=500000
        hra=100000
        da=60/100*basicpay
        def salary(self):
            return self.basicpay+self.hra+self.da
        
mEmp=Employee()
print("The Salary of ",mEmp.name,"is",mEmp.salary())

