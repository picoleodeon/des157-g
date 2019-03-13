'use strict';
console.log('reading js');


var closeOne=document.querySelector('#closeOne');
var closeTwo=document.querySelector('#closeTwo');
var closeThree=document.querySelector('#closeThree');

var info=document.querySelector('#info');

var timeLine=document.querySelector('#timeLine');
var timelineTwo=document.querySelector('#timelineTwo');
var timelineThree = document.querySelector('#timelineThree');


info.addEventListener('click', function() {
  overlay.style.display = 'block';
}, false);
closeOne.addEventListener('click', function() {
  overlay.style.display = 'none';
}, false);

timeLine.addEventListener('click', function() {
  overlayTwo.style.display = 'block';
}, false);
closeTwo.addEventListener('click', function() {
  overlayTwo.style.display = 'none';
}, false);
