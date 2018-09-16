//@ts-nocheck

let data;
let plot;
let isdrawedpoints = false;
let scl;
let margin = 0.25;

var s = function (sketch) {

	let wid = sketch.windowWidth * 0.6;
	let hei = sketch.windowWidth * 0.6;
	scl = 1 / 18 * sketch.windowWidth;

	sketch.preload = function () {
		data = sketch.loadJSON("iris.json");
	}

	sketch.setup = function () {
		plot = sketch.createCanvas(wid, hei);
		plot.parent('p5sketch');
		sketch.textAlign(sketch.CENTER);
		sketch.ellipseMode(sketch.CENTER);
		sketch.background(210);
		sketch.push();
		sketch.translate(scl * margin, hei - scl * margin);
		sketch.drawGrid();
		sketch.pop();
		sketch.drawPoints();//draws only once

		sketch.text('sepalLength', wid / 2, wid - 13);

		sketch.rotate(-sketch.HALF_PI);
		sketch.text('sepalWidth', -wid / 2, 20);

	};

	sketch.draw = function () {
		sketch.noLoop();
	};

	sketch.drawGrid = function () {
		// sketch.textAlign(sketch.LEFT);
		sketch.stroke(180);
		sketch.fill(120);
		for (let x = -10; x <= 10; x++) {
			sketch.line(x * scl, -sketch.height, x * scl, sketch.height);
			if (sketch.int(x) != 0) {
				sketch.text(x, x * scl, margin * scl);
			}
		}
		for (let x = -10; x <= 10; x++) {
			sketch.line(-sketch.width, x * scl, sketch.width, x * scl);
			sketch.text(-x, -margin/2 * scl, x * scl + margin);
		}
	}

	sketch.drawPoints = function () {
		sketch.push();
		sketch.noStroke();
		if (!isdrawedpoints) {

			for (let index = 0; index < Object.keys(data).length; index++) {
				const element = data[index];
				if (element.species == 'setosa') {
					sketch.fill(100, 0, 0, 100);
				}
				else if (element.species == 'versicolor') {
					sketch.fill(0, 100, 0, 100);
				}
				else if (element.species == 'virginica') {
					sketch.fill(0, 0, 100, 100);
				}
				sketch.ellipse(scl * (margin + element.sepalLength), hei - scl * (margin + element.sepalWidth), scl/5);
			}
		}
		isdrawedpoints = true;
		sketch.pop();
	}
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
	let val1 = Number(document.getElementById("sepalLength").value);
	let val2 = Number(document.getElementById("sepalWidth").value);
	let val3 = Number(document.getElementById("petalLength").value);
	let val4 = Number(document.getElementById("petalWidth").value);
	p.innerHTML = (val1 + val2 + val3 + val4);
}