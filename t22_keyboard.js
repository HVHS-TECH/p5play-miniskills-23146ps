/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
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
	if (kb.pressing('left')) {
		sprite.vel.x = -5;
		//sprite.drag = 0;
		//sprite.friction = 0;
	} else if (kb.pressing('right')){
		sprite.vel.x = 5;
		//sprite.drag = 0;
		//sprite.friction = 0;
	} else if (kb.presses('up')){
		sprite.vel.y -= 10;
	}

	if (kb.released('left')) {
		sprite.friction = 0.2;
		sprite.drag = 1;
	} else if (kb.released('right')){
		sprite.friction = 0.2;
		sprite.drag = 1;
	}

}

/*******************************************************/
//  END OF APP
/*******************************************************/