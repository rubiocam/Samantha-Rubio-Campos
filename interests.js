var slideIndex = 1;

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("slides");
//   var y = document.getElementsByClassName("container");

//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//     y[i].style.display = "none";
//   }

//   slideIndex++;
//   if (slideIndex > x.length) {
//     slideIndex = 1
//   }
  
//   x[slideIndex-1].style.display = "block";
//   y[slideIndex-1].style.display = "block"
  
//   setTimeout(carousel, 30000); // Change image every 30 seconds
// }

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var y = document.getElementsByClassName("container");
  var z = document.getElementsByClassName("flavortext");

  if (n > x.length) {
    slideIndex = 1
  }

  
  if (n < 1) {
    slideIndex = x.length;
  } 

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
    z[i].style.display = "none";
  }
  
  x[slideIndex-1].style.display = "block";
  y[slideIndex-1].style.display = "block";
  z[slideIndex-1].style.display = "block";
}
