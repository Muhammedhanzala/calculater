var num1=prompt("enter your first value")
var num2=prompt("enter your second value")
var result=prompt("enter your aperator")

if (result == "+") {
    alert(num1 + num2);
    
}
else if (result == "-") {
    alert(num1 - num2);
    
}
else if (result == "*") {
    alert(num1 * num2);
    
}
else if(result == "/") {
    alert(num1 / num2);
    
}
else if(result == "**") {
    alert(num1 ** num2);

}
else{
    alert("Invalid Input");

}