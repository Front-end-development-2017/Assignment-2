
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  let scrollUp = document.getElementById("arrow");
  let scrollTopBody = document.body.scrollTop();
  let scrollTopElement = document.documentElement.scrollTop();

  scrollUp.addEventListener("click", scrollFunction);

  let toggle = false;
  function scrollFunction(){

  if(scrollTopBody > 20 || scrollTopElement > 20)
     {
      scrollUp.classList.add("show-arrow");
      toggle = true;
      } 
     else {
      scrollUp.classList.remove("show-arrow");
      toggle = false;
     }
  }