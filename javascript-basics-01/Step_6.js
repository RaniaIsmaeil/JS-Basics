var btn = document.getElementById("validate");
btn.addEventListener("click",function division(){
    var x = document.getElementById("first_number").value;
    var y = document.getElementById("second_number").value;
    var remainder = x % y;
    alert("The remainder of the division is : " + remainder);
});

