

 


 
function validate()                                    
{ 
    var name =document.getElementById('Name').value;              
    var email = document.getElementById('Email').value;   
    var phone =document.getElementById('Mobile').value;
    var city = ddocument.getElementById('City').value;
    var district = document.getElementById('District').value;
    var password = document.getElementById('password').value;
    var address1 = document.getElementById('Address1').value;
    var address2 = document.getElementById('Address2').value;
   
    if (name.value == "")                                  
    { 
        alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
    if (address1.value == "")                               
    { 
        alert("Please enter your address1."); 
        name.focus(); 
        return false; 
    } 
       
    if (address2.value == "")                               
    { 
        alert("Please enter your address2."); 
        name.focus(); 
        return false; 
    } 
    if (email.value == "")                                   
    { 
        alert("Please enter a valid e-mail address."); 
        Email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "")                           
    { 
        alert("Please enter your phone number."); 
        phone.focus(); 
        return false; 
    } 
   
    if (password.value == "")                        
    { 
        alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
    if (city.value == "")                               
    { 
        alert("Please enter your city"); 
        cityname.focus(); 
        return false; 
    } 

   
    if (district.selectedIndex < 1)                  
    { 
        alert("Please enter your district."); 
       district.focus(); 
        return false; 
    } 
   
    return true; 
}

