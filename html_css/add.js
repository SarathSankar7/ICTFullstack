function add()
{
    var number1=parseInt(document.getElementById('num1').value);
    var number2=parseInt(document.getElementById('num2').value);
    var number3=number1+number2;
    document.getElementById("result").innerHTML=number3;
}