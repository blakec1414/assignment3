var xhr = new XMLHttpRequest();
//var url = "https://api.nasa.gov/planetary/apod?api_key=G1ToqzZncoUNO42lrAAV600DZyurcNWPk4piOI5J"


$("#randomize").on("click",function(){
clearAPI()
callAPI()

})





var vidcapture, ctracker, drawcanvas;



function setup(){
  

  var cnv= createCanvas(1500, 400);
  cnv.parent("p5canvas");
 


vidcapture = createCapture(VIDEO);
vidcapture.size(vidcapture.width*3, vidcapture.height*4.2)

ctracker = new clm.tracker();
ctracker.init();
ctracker.start(vidcapture.elt);


vidcapture.hide()


 
}

function draw(){
  

translate(vidcapture.width, 0)
scale(-.5, .5)
//image(vidcapture, 0, 0)

var position = ctracker.getCurrentPosition();

if (position){
	//ctracker.draw(drawcanvas);


 		var r = map(position[2][0], 250, 300, 0, 255, true);
	 	 var b = map(position[12][1], 150, 200, 0, 225, true);
	 	 var g = map(position[37][0], 220, height, 0, 225, true);
	 	 
 		background(r, b, g, 10);

	fill(255);

	position.forEach(function(pos){
	triangle(pos[0],pos[1],100,100)
	ellipse(pos[0],pos[1],10)
})
}



}



  function callAPI() {
var xhr2 = new XMLHttpRequest();
var url = " https://www.poemist.com/api/v1/randompoems"

xhr2.open("GET", url, true);

xhr2.send(null);

xhr2.onload = function(){

	if(xhr2.status == 200){


		var poemData = JSON.parse(xhr2.responseText)

		console.log(poemData)



		$("p").prepend("<h3>" + poemData[0].content + "</h3>")



	}
}
}

function clearAPI() {$("p").empty()}







