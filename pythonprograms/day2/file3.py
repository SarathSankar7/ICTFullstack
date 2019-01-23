username=input("Enter your username ")
password=input("Enter your password ")
fileob=open("login.txt","r")
uname=fileob.readline()
passw=fileob.readline()
print(username)
print(password)
print(uname)
print(passw)
uname= uname.rstrip("\n")
if username==uname and password == passw:
    print("Login Successful")
else:
    print("Unsuccessful")
