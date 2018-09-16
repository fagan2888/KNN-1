//@ts-nocheck

let data;

// var myp5 = new p5( function( sketch ) {

// 	var x = 100; 
// 	var y = 100;

// 	sketch.preload = function(){
// 		data = loadJSON("iris.json");
// 	}
  
// 	sketch.setup = function() {
// 	  sketch.createCanvas(200, 200);
// 	};
  
// 	sketch.draw = function() {
// 	  sketch.background(0);
// 	  sketch.fill(255);
// 	  sketch.rect(x,y,50,50);
// 	};
//   });


let plot;

var s = function( sketch ) {

	var x = 100; 
	var y = 100;
  
	sketch.setup = function() {
	  plot = sketch.createCanvas(sketch.windowWidth*0.6, sketch.windowWidth*0.6);
	  plot.parent('p5sketch');
	};
  
	sketch.draw = function() {
	  sketch.background(0);
	  sketch.fill(255);
	  sketch.rect(x,y,50,50);
	};
  };

var myp5 = new p5(s, document.getElementById('p5sketch'));


// function preload() {
// 	data = loadJSON("iris.json", () => {
// 		// ratings = data.ratings;
// 	});
// }

// function setup() {
// 	plot = createCanvas(500, 500);
// 	plot.background(255);
// 	// plot = select("#plot");

// 	text('123123', 0,100);
// 	// ax1.parent(plot);
// 	// ax1.position(10, 10);
	
		
	


// }

// when press on button
function onClick() {
	let p = document.getElementById("p1");
	let val1 = float( document.getElementById("sepalLength").value);
	let val2 = float( document.getElementById("sepalWidth").value);
	let val3 = float( document.getElementById("petalLength").value);
	let val4 = float( document.getElementById("petalWidth").value);
	p.innerHTML = (val1+val2+val3+val4);
}