
var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");
var img3 = document.querySelector("#image3");
var img4 = document.querySelector("#image4");
var img5 = document.querySelector("#image5");

  var change_images = function(event){

    if(img1 === event.target){
   img1.src = "images/image1_2.jpg";
  }
  else  if(img2 === event.target){
   img2.src = "images/image2_2.jpg";
  }
  else if(img3 === event.target){
   img3.src = "images/image3_2.jpg";
  }
  else  if(img4 === event.target){
   img4.src = "images/image4_2.jpg";   
  }
  else  if(img5 === event.target){
   img5.src = "images/image5_2.jpg";
 }

}
img1.addEventListener("mouseover",change_images);
img1.addEventListener("mouseout",change_images);
img2.addEventListener("mouseover",change_images);
img3.addEventListener("mouseover",change_images);
img4.addEventListener("mouseover",change_images);
img5.addEventListener("mouseover",change_images);


var restore_images = function(events){

    if(img1 === events.target){
   img1.src = "images/image1.jpg";
  }
  else  if(img2 === events.target){
   img2.src = "images/image2.jpg";
  }
  else if(img3 === events.target){
   img3.src = "images/image3.jpg";
  }
  else  if(img4 === events.target){
   img4.src = "images/image4.jpg";   
  }
  else  if(img5 === events.target){
   img5.src = "images/image5.jpg";
 }

}
img1.addEventListener("mouseout",restore_images);
img1.addEventListener("mouseout",restore_images);
img2.addEventListener("mouseout",restore_images);
img3.addEventListener("mouseout",restore_images);
img4.addEventListener("mouseout",restore_images);
img5.addEventListener("mouseout",restore_images);
