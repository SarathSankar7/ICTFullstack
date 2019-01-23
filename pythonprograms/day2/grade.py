sub1=int(input("Enter First subject mark :"))
sub2=int(input("Enter second subject mark :"))
sub3=int(input("Enter third subject mark :"))
sub4=int(input("Enter fourth subject mark :"))
sub5=int(input("Enter fifth subject mark :"))
g=(sub1+sub2+sub3+sub4+sub5)/5


def grade(g):
    if g>= 90 and g<= 100:
        return 'A'
    elif g>=80 and g<90:
        return 'B'
    elif g>=70 and g<80:
        return 'C'
    elif g>=60 and g<70:
        return 'D'
    else:
        return 'F'

finalgrade=grade(g)
print("Your grade is ", finalgrade)