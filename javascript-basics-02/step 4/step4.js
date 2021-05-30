var resetPart =document.getElementById("check");
resetPart.addEventListener("click",function res(){
        var txt;
        var r = confirm("would you like to reset all fields ?");
        if (r == true) {
            var name=document.getElementById("name").value=null;
            var surname=document.getElementById("surname").value=null;
            var city=document.getElementById("city").value=null;
        
        } else {
            var name=document.getElementById("name").value;
            var surname=document.getElementById("surname").value
            var city=document.getElementById("city").value;
        
        }

})


