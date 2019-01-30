'use strict';

console.log('reading js');

document.querySelector('#submit').addEventListener('click', processForm);
document.querySelector('#reset').addEventListener('click', resetForm);

function processForm(evt) {


//each of the forms
 var nounOne = document.querySelector('#nounOne').value;
 var adjectiveOne = document.querySelector('#adjectiveOne').value;
 var verbOne = document.querySelector('#verbOne').value;
 var adjectiveTwo = document.querySelector('#adjectiveTwo').value;
 var nounTwo = document.querySelector('#nounTwo').value;

 var resetForm = document.querySelector('#reset');

 //message that appears
 var myMsg = document.querySelector('#myMsg');
 var msgSection = document.querySelector('#msgSection');


//message
myMsg.innerHTML =
 'Pay close attention to your dreams. Tonight you will dream about a ' +
 nounOne +
 '. This is a very ' +
 adjectiveOne +
 ' kind of dream. But do not fret. For, this means that you are destined to ' + verbOne + '. Your future looks to appear to be ultimately ' + adjectiveTwo + '. Make note  if the ' + nounOne + ' finds  some ' + nounTwo + '. Mostly because that would be somewhat unpleasant for both parties. Your dream will guide you to  your true purpose in life.';


evt.preventDefault();
}

//resets form and makes message go away
function resetForm() {
  myMsg.style.display = 'none';
  resetForm.style.display = 'none';
}
