// code from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navMobile() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}