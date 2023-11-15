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