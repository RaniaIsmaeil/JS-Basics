
var btn =document.getElementById("validate");
btn.addEventListener("click",function calculations(){
    var x = document.getElementById("shoe_size").value;
    var y = document.getElementById("year").value;
    var multShoe = x*2;
    var addition = multShoe + 5 ;
    var secondMult = addition * 50 ;
    var secondAddition = secondMult + 1766 ;
    alert ("The result is: " + secondAddition);
})





