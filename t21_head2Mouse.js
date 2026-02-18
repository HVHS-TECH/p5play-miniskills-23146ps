/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

	world.gravity.y = 10;

	sprite = new Sprite(width/2,height/2,200,200);
	sprite.color = 'blue'
	sprite.vel.x = 2;
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
	
	//sprite.moveTowards(mouseX, mouseY, 10);
	if (mouse.pressing()) {
		sprite.moveTo(mouseX, mouseY, 10);
	}

}

/*******************************************************/
//  END OF APP
/*******************************************************/