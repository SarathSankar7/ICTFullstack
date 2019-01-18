var a=643,temp;
temp=a;
var rev = 0, rem;
while (temp>0)
{
rem = temp % 10; //6
rev = rev * 10 + rem ; //346
temp= parseInt(temp/10);  //0
}
if(a==rev)
{
console.log("palindrome")
}
else
{
    console.log("not palindrome")
}