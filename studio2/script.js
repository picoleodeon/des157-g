'use strict';
console.log('reading js');

var topSpot=document.querySelector('#topSpot');
var rightSpot=document.querySelector('#rightSpot');
var leftSpot=document.querySelector('#leftSpot');
var backPack=document.querySelector('#backPack');
var overlay = document.querySelector('#overlay');

 topSpot.addEventListener('click', function(){
   overlay.style.display='block';
 },false);
