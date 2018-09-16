//@ts-nocheck

let ratings;

function preload(){
	data = name.loadJSON("ratings.json",()=>{
		ratings = data.ratings;
	});
}

function setup() {
	// print(ratings);
	
	let sel = createSelect();
	sel.position(10,10);
	sel.option('kazim');
	


	

}

// function draw() {

// }