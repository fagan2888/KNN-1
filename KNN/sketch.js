//@ts-nocheck

let ratings;

function preload() {
	data = loadJSON("ratings.json", () => {
		ratings = data.ratings;
	});
}

function setup() {
	noCanvas();
	let sel = createSelect();
	sel.parent('selectors');
	let sel2 = createSelect();
	sel2.parent('selectors');
	let but = createButton('push');
	but.parent('button');
	let p = createP('ads');
	p.parent('paragraph');
	
	but.mouseClicked(() => {
		p.html(sel.value() + ' ' + sel2.value());
	});

	
	

	Object.keys(ratings).forEach(rating => {
		sel.option(rating);
		sel2.option(rating);
	});

	print(ratings);


}

// function draw() {

// }