'use strict';
console.log('reading js');

var closeOne=document.querySelector('#closeOne');
// var closeTwo=document.querySelector('#closeTwo');
// var closeThree=document.querySelector('#closeThree');
// var closeFour=document.querySelector('#closeFour'); For when next stories are added
var closeFive=document.querySelector('#closeFive');

var info=document.querySelector('#info');

var lasCasas=document.querySelector('#lasCasas');
var adamOnis=document.querySelector('#adamOnis');
var presentDay = document.querySelector('#presentDay');
var overlayShip = document.querySelector('#overlayShip');
var overlayHisp = document.querySelector('#overlayHisp');
var overlayNote = document.querySelector('#overlayNote');
var overlayWolf = document.querySelector('#overlayWolf');
var overlayWorld = document.querySelector('#overlayWorld');

info.addEventListener('click', function() {
  overlay.style.display = 'block';
}, false);
closeOne.addEventListener('click', function() {
  overlay.style.display = 'none';
}, false);

lasCasas.addEventListener('click', function() {
  overlayTwo.style.display = 'block';
}, false);
// closeTwo.addEventListener('click', function() {
//   overlayTwo.style.display = 'none';
// }, false);
//
// adamOnis.addEventListener('click', function() {
//   overlayTwo.style.display = 'block';
// }, false);
// closeThree.addEventListener('click', function() {
//   overlayThree.style.display = 'none';
// }, false);
//
// presentDay.addEventListener('click', function() {
//   overlayFour.style.display = 'block';
// }, false);
// closeFour.addEventListener('click', function() {
//   overlayFour.style.display = 'none';
// }, false);

overlayShip.addEventListener('click', function() {
  overlayFive.style.display = 'block';
}, false);
// closeFive.addEventListener('click', function() {
//   overlayFive.style.display = 'none';
// }, false);


//icons overlay
overlayHisp.addEventListener('click', function() {
  overlaySix.style.display = 'block';
}, false);
overlayNote.addEventListener('click', function() {
  overlaySeven.style.display = 'block';
}, false);
overlayWolf.addEventListener('click', function() {
  overlayEight.style.display = 'block';
}, false);
overlayWorld.addEventListener('click', function() {
  overlayNine.style.display = 'block';
}, false);
