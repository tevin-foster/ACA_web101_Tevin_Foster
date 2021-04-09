// Onclick, we want the number to appear

function myFunction() {
  var x = document.getElementsByTagName("H4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}