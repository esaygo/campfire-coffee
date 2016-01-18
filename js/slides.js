//slideshow - index.html
var slideimages = new Array(); // create new array to preload images

function initSlideshow(){
  slideimages[0] = new Image(); // create new instance of image object
  slideimages[0].src = "img/campfire.jpg"; // set image src property to image path, preloading image in the process
  slideimages[1] = new Image();
  slideimages[1].src = "img/campfire-family.jpg";
  slideimages[2] = new Image();
  slideimages[2].src = "img/campfire-coffee.jpg";

}
var step=0

function slideit(){
 //if browser does not support the image object, exit.
 if (!document.images)
  return;
 document.getElementById('slide').src = slideimages[step].src;
 if (step<2)
  step++;
 else
  step=0;
 //call function "slideit()" every 2.5 seconds
 setTimeout("slideit()",2500);
}
console.log("init images");
initSlideshow();
console.log("start slides");
slideit();
