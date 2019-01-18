function Readme()
{
    var getName=document.getElementById('Name').value;
    console.log(getName);
    var getRollNo=document.getElementById('RollNo').value;
    console.log(getRollNo);
    var getclass=document.getElementById('myclass').value;
    console.log(getclass);
    document.getElementById("result").innerHTML=getName+" "+getRollNo+" "+getclass;

}