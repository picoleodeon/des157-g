console.log('reading.js');


function setup(){
  //size is createCanvas
  //create a variable to reference the createCanvas
  var myCanvas=createCanvas(800,250);

  myCanvas.parent('mysketch')
}

function draw(){

  background('#FF6666');
  for (var y=40; y<=height; y+=120)
    for (var x=40; x<=width; x+=200) {

      if ((mouseX > 0) && (mouseX < 266.6) &&
        (mouseY > 0) && (mouseY < 50)) {

        stroke(250, random(255), random(255) );
        strokeWeight(2);
        line(x+120, y, x+160, y+60);
        line(x+160, y+60, x+120, y+120);
        line(x, y+120, x-40, y+60);
        line(x-40, y+60, x, y);
        line(x, y, x+120, y);

        line(x, y, x+60, y+60);
        line(x+60, y+60, x+160, y+60);
        line(x+60, y+60, x, y+120);
      } else {
        noStroke();
        fill(250, random(255), random(255) );
      }
      rect(0, 0, 266.6, 50);


      if ((mouseX > 266) && (mouseX < 533) &&
        (mouseY > 0) && (mouseY < 50)) {

        fill(250, random(255), random(255) );
        ellipse(x+60, y+60, 10, 10);
        ellipse(x, y, 10, 10);
        ellipse(x+120, y, 10, 10);
        ellipse(x-40, y+60, 10, 10);
        ellipse(x+160, y+60, 10, 10);
        ellipse(x, y+120, 10, 10);
        ellipse(x+120, y+120, 10, 10);
      } else {
        noStroke();
        fill(250, random(255), random(255) );
      }
      rect(266, 0, 533, 50);

      if ((mouseX > 533) && (mouseX < 800) &&
        (mouseY > 0) && (mouseY < 50)) {


        stroke('#FFD700');
        strokeWeight(2);
        line(x+120, y, x+160, y+60);
        line(x+160, y+60, x+120, y+120);
        line(x, y+120, x-40, y+60);
        line(x-40, y+60, x, y);
        line(x, y, x+120, y);

        line(x, y, x+60, y+60);
        line(x+60, y+60, x+160, y+60);
        line(x+60, y+60, x, y+120);

        fill(250, random(255), random(255) );
        ellipse(x+60, y+60, 10, 10);
        ellipse(x, y, 10, 10);
        ellipse(x+120, y, 10, 10);
        ellipse(x-40, y+60, 10, 10);
        ellipse(x+160, y+60, 10, 10);
        ellipse(x, y+120, 10, 10);
        ellipse(x+120, y+120, 10, 10);
      } else {
        noStroke();
        fill(250, random(255), random(255) );
      }
      rect(533, 0, 800, 50);
    }
}
