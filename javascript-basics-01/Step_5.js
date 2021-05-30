// var a = Number(prompt("Enter first number"));
// var b = Number(prompt("Enter second number"));
// var c = a*b;
// alert("The answer is " + c);

var btn = document.getElementById("validate");
btn.addEventListener("click",function multiplyTwoNumbers(){
    var x = document.getElementById("first_number").value;
    var y = document.getElementById("second_number").value;
    var z = x*y;
    alert("The answer is : " + z);
});
