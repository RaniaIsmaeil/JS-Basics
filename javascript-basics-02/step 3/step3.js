var input = document.getElementById("name");
var div = document.getElementById("target");
input.addEventListener("input",function tar() {
      document.getElementById("target").innerHTML = document.getElementById("name").value;
})