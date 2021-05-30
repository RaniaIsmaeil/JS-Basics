
var target = document.querySelector("#image1");
target.addEventListener("mouseover", mOver, false);
target.addEventListener("mouseout", mOut, false) ; 

function mOver() {
   target.src = "images/image1_2.jpg";
}

function mOut() {  
   target.src = "images/image1.jpg";
}


