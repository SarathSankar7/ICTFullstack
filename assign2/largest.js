function largest(a,b,c)
{
    if(a> b && a>c)
    {
        console.log("a is the greatest");
    }
    else if(b>a&&b>c)
    {
        console.log("b is the greatest");
    }
    else if (c>a && c>b)
    {
        console.log("c is the greatest");
    }
}
largest(300,100,200);