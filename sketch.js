
let frame = 710; // time variable 0-3600 ALL 600 - 3000 MIDOKORO 

function setup() {
  // createCanvas(600, 600);
	window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
	window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
	createCanvas(windowWidth, windowHeight);
  frameRate(60); // Attempt to refresh at starting FPS
}

function draw() {
	//blendMode(OVERLAY);
	blendMode(BLEND);
  background(50);

	frame = frame + 0.1; // update time
	if (3000 < frame%3600) frame = frame + 1310;
	
	let maxc = 75
	//let maxc = 65;
	let r = windowHeight/(maxc*2)
	
	// draw line
	for(let c = 1; c < maxc; c++){
		// draw line
		stroke(100);
		strokeWeight(4);
		//blendMode(ADD);
		blendMode(DODGE);
		//blendMode(OVERLAY);
		//blendMode(LIGHTEST);
		//blendMode(HARD_LIGHT);
		let x1 = windowWidth/2 + r*c *cos(radians(-frame/10 * c));
		let y1 = windowHeight/2 + r*c *sin(radians(-frame/10 * c));
		let x2 = windowWidth/2 + r*(c+1) *cos(radians(-frame/10 * (c+1)));
		let y2 = windowHeight/2 + r*(c+1) *sin(radians(-frame/10 * (c+1)));

		line(x1,y1,x2,y2);
	}
	for(let c = 1; c < maxc; c++){
		// draw line
		stroke(100);
		strokeWeight(8);
		blendMode(OVERLAY);
		let x1 = windowWidth/2 + r*c *cos(radians(-frame/10 * c));
		let y1 = windowHeight/2 + r*c *sin(radians(-frame/10 * c));
		let x2 = windowWidth/2 + r*(c+1) *cos(radians(-frame/10 * (c+1)));
		let y2 = windowHeight/2 + r*(c+1) *sin(radians(-frame/10 * (c+1)));

		line(x1,y1,x2,y2);
		line(x1,y1,x2,y2);
	}
	
	
	blendMode(BURN);
	//fill(100);
	fill(140);
  rect(0,0,windowWidth,windowHeight);
	
	fill(10);
	ellipse(windowWidth/2,windowHeight/2,200,200);
	
	blendMode(BLEND);
	drawmonitor();
  
	
}


function drawmonitor(){

	noStroke();
	let monitorArray = ["time : " + nf(millis()/1000,1,1),
											"frames : " + frame,
											"frames/60 : " + frame/60];

	var tsize = 10
	let x = 0;
	let y = tsize*monitorArray.length;

	fill(0)
	rect(x, y, tsize*10, tsize*monitorArray.length+tsize/2)
	
	fill(255);
	textSize(tsize);
	textAlign(LEFT);
	for (let i = 0; i < monitorArray.length; i = i + 1) {
			text(monitorArray[i] ,x ,y + tsize*i , width);
	}
	
	//text("noise : " + str(noise(Mynoise)) + "\nstep : " + str(step) + "\n blocksize : " + str(blocksize)  + "\n blank : " + str(blank) ,100, 100);

}
