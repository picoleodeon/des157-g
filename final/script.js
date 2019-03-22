'use strict';
console.log('reading js');

var closeOne=document.querySelector('#closeOne');
var closeTwo=document.querySelector('#closeTwo');
var closeThree=document.querySelector('#closeThree');
var closeFour=document.querySelector('#closeFour');

var info=document.querySelector('#info');

var lasCasas=document.querySelector('#lasCasas');
var adamOnis=document.querySelector('#adamOnis');
var presentDay = document.querySelector('#presentDay');


info.addEventListener('click', function() {
  overlay.style.display = 'block';
}, false);
closeOne.addEventListener('click', function() {
  overlay.style.display = 'none';
}, false);

lasCasas.addEventListener('click', function() {
  overlayTwo.style.display = 'block';
}, false);
closeTwo.addEventListener('click', function() {
  overlayTwo.style.display = 'none';
}, false);

adamOnis.addEventListener('click', function() {
  overlayTwo.style.display = 'block';
}, false);
closeThree.addEventListener('click', function() {
  overlayThree.style.display = 'none';
}, false);

presentDay.addEventListener('click', function() {
  overlayTwo.style.display = 'block';
}, false);
closeFour.addEventListener('click', function() {
  overlayFour.style.display = 'none';
}, false);
