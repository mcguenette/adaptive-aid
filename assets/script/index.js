'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Get HTML element by id
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

// Select HTML element by selector
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

// Get a (node) list of HTML elements
function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

// Detail page link
const detailLink = select('.detail-link');

onEvent('click', detailLink, () => {
    window.location.href='./detail.html';
});

// Copyright date

const date = new Date().getFullYear();
const output = select('#date');

output.textContent = date;


// Modal
select('#open-modal-btn').onclick = function() {
    select('#modal').style.display = 'block';
};
  
document.getElementsByClassName('close')[0].onclick = function() {
    select('#modal').style.display = 'none';
};

  // Close the modal if the overlay is clicked
  window.onclick = function(event) {
    if (event.target == select('#modal')) {
      select('#modal').style.display = 'none';
    }
  };