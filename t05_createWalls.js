/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

	world.gravity.y = 10;

	sprite = new Sprite(500,100,200,200);
	sprite.color = 'blue'
	sprite.rotationSpeed = 2;
	sprite.vel.x = 2;
	platform_1 = new Sprite(500,300,1000,20,'k')
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('ccc');
}

/*******************************************************/
//  END OF APP
/*******************************************************/