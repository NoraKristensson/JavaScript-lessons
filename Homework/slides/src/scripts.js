function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "links") {
    x.className += " responsive";
  } else {
    x.className = "links";
  }
}

$(".slider-container").slick({
  dots: true,
});
