/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

	//world.gravity.y = 10;

	sprite = new Sprite(width/2,height/2,50,);
	sprite.color = 'blue'

	wallLH  = new Sprite(0, height/2, 8, height, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(width, height/2, 8, height, 'k');
	wallRH.color = 'black'
	wallTop = new Sprite(width/2, 0, width, 8, 'k');
	wallTop.color = 'black'
	wallBot = new Sprite(width/2, height, width, 8, 'k');
	wallBot.color = 'black'

	alienGroup = new Group();

	for (i = 0; i < 40; i++) {
		
		alien = new Sprite(randNum = random(20, 100), randNum = random(20, 100), 50, 50);
		
		alien.vel.x = randNum = random(2, 8);
		
		alien.vel.y = randNum = random(2, 8);
		
		alien.bounciness = 1;
		
		alien.friction = 0;

		alienGroup.add(alien);
	}

		function func2Call(alien, sprite) {
		// Delete the alien which was hit
		alien.remove();
	}
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('ccc');

	if (alienGroup.collided(sprite)){
		func2Call()
	}
}

/*******************************************************/
//  END OF APP
/*******************************************************/