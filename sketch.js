
let frame = 0; // time variable

function setup() {
  // createCanvas(600, 600);
	window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
	window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
	createCanvas(windowWidth, windowHeight);
  frameRate(60); // Attempt to refresh at starting FPS
}

function draw() {
  background(50, 255); // translucent background (creates trails)

	drawmonitor();
  frame = frame + 1; // update time
	
	if(false){
		//tamatama KAWAII
		let pX1 = windowWidth/2 + windowWidth/3 *sin(frame);
		ellipse(pX1, windowHeight/5, 3.0, 3.0);


		let pX2 = windowWidth/2 + windowWidth/3 *sin(frame/60);
		ellipse(pX2, windowHeight/5*2, 3.0, 3.0);

		// 60/fps * 60sec / 360 = 10counts
		let pX3 = windowWidth/2 + windowWidth/3 *sin(radians(frame));
		ellipse(pX3, windowHeight/5*3, 3.0, 3.0);

		// 60/fps * 60sec / 360 /10 = 1counts
		let pX4 = windowWidth/2 + windowWidth/3 *sin(radians(frame/10));
		ellipse(pX4, windowHeight/5*4, 3.0, 3.0);
	}
	
	// draw
	if(false){
		for(let c = 51; c < 65; c++){
			let x = windowWidth/2 + windowWidth/3 *sin(radians(frame/10 * c));
			ellipse(x, windowHeight-10, 3.0, 3.0);
		}

		for(let c = 1; c < 65; c++){
			let x1 = windowWidth/2 + windowWidth/3 *sin(radians(frame/10 * c));
			ellipse(x1, 10 + 6*c, 4.0, 4.0);
		}
	}
	
	if (false){
		// draw circles
		if(true){
			// drawn circle in clockwise
			for(let c = 1; c < 65; c++){
				let x1 = windowWidth/2 + 6*c *cos(radians(frame/10 * c));
				let y1 = windowHeight/2 + 6*c *sin(radians(frame/10 * c));
				ellipse(x1, y1, 4.0, 4.0);
			}
		}
		if(false){
			// draw circle in anti-clockwise
			for(let c = 1; c < 65; c++){
				let x1 = windowWidth/2 + 6*c *cos(radians(-frame/10 * c));
				let y1 = windowHeight/2 + 6*c *sin(radians(-frame/10 * c));
				ellipse(x1, y1, 4.0, 4.0);
			}
		}
	}	
	
	if(true){
		// draw line
		for(let c = 1; c < 65; c++){
			// draw line
			stroke(200,80);
			strokeWeight(2);
			
			let x1 = windowWidth/2 + 2*c *cos(radians(-frame/10 * c));
			let y1 = windowHeight/2 + 2*c *sin(radians(-frame/10 * c));
			let x2 = windowWidth/2 + 2*(c+1) *cos(radians(-frame/10 * (c+1)));
			let y2 = windowHeight/2 + 2*(c+1) *sin(radians(-frame/10 * (c+1)));
			
			line(x1,y1,x2,y2);
		}
	}
	
	
	
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