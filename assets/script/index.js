'use strict';
// Modal
document.getElementById("openModalBtn").onclick = function() {
    document.getElementById("myModal").style.display = "block";
  };
  
  document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
  };
  
  // Close the modal if the overlay is clicked
  window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  };