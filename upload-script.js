var modal = document.getElementById("permissionPopup");
var btn = document.getElementById("uploadfile");
var open = document.getElementById("openPopup");

// var span = document.getElementsByClassName("close")[0];
// var agree = document.getElementsByClassName("agree")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

// Close popup with <span> (x) and/or button (I agree)
span.onclick = function() {
  modal.style.display = "none";
}
agree.onclick = function() {
  modal.style.display = "none";
}

// Clicks anywhere outside of the window = close the window
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function myFunction() {
  document.getElementById("submitform").submit();
}

