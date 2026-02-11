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

	sprite = new Sprite(width/2,height/2,20);
	sprite.color = 'blue'
	sprite.bounciness = 1;
	sprite.vel.x = 2;
	sprite.friction = 0;
	sprite.drag = 0;
	//platform_1 = new Sprite(500,300,1000,20,'k')

	wallLH  = new Sprite(0, height/2, 8, height, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(width, height/2, 8, height, 'k');
	wallRH.color = 'black'
	wallTop = new Sprite(width/2, 0, width, 8, 'k');
	wallTop.color = 'black'
	wallBot = new Sprite(width/2, height, width, 8, 'k');
	wallBot.color = 'black'
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('ccc');

	sprite = new Sprite(width/2,height/2,10);
	sprite.color = 'blue'
	sprite.bounciness = 0.7;
	sprite.friction = 0;
	//sprite.drag = 0;
}

/*******************************************************/
//  END OF APP
/*******************************************************/