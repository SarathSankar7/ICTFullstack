import matplotlib.pyplot as plt
x1=[1,2,3]
y1=[2,1,4]
plt.plot(x1,y1, label="line 1")

x2=[2,1,3]
y2=[3,3,2]
plt.plot(x2,y2, label="line 2")

plt.xlabel("x-axis")
plt.ylabel("y-axis")
plt.title("Graph with two lines")
plt.legend()
plt.show()