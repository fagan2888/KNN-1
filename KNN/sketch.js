//@ts-nocheck

let ratings;

function preload(){
	data = loadJSON("ratings.json",()=>{
		ratings = data.ratings;
	});
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	let sel = createSelect();
	sel.position(width/2-40,10);
	let sel2 = createSelect();
	sel2.position(width/2-40,30);
	// sel.option('kazim');

	Object.keys(ratings).forEach(rating => {
		sel.option(rating);
		sel2.option(rating);
	});

	print(ratings);
	


	

}

// function draw() {

// }