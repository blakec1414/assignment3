var vidcapture, ctracker, drawcanvas;

function setup(){
  

  var cnv= createCanvas(windowWidth, windowHeight/2)
  cnv.parent("p5canvas");


vidcapture = createCapture(VIDEO);
vidcapture.size(vidcapture.width*3, vidcapture.height*4.2)

ctracker = new clm.tracker();
ctracker.init();
ctracker.start(vidcapture.elt);
drawcanvas = document.getElementById('defaultCanvas0');

vidcapture.hide()


  var cnv= createCanvas(windowWidth, windowHeight/2)
  cnv.parent("p5canvas");
}

function draw(){
  

image(vidcapture, 0, 0)

var positions = ctracker.getCurrentPosition();

if (positions){
	//ctracker.draw(drawcanvas);
	
}
}

  






