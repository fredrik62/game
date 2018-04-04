'use strict';

var SPEED = 4;

function Game(canvas){
	var self = this;

	self.canvas = canvas;
	self.ctx = canvas.getContext("2d");

	self.width = 1000;
	self.height = self.width / 1.77;

	self.ctx.canvas.width = self.width;
	self.ctx.canvas.height = self.height;
	
	self.player = new Player(self.ctx);

	//upper right corner safe position
	self.safePosition = new SafePosition(970,220, self.ctx);
   
	self.frame();
}
Game.prototype.update = function() {
	var self = this;

};

Game.prototype.check = function () {
  var self = this;

  if(self.player.y > self.safePosition.y && self.player.y < self.safePosition.y + self.safePosition.size) {
		console.log("yolo");
  } 
};

Game.prototype.draw = function() {
	var self = this;

	//self.player.draw();

	// self.safePosition.draw();
};


Game.prototype.frame = function() {
	var self = this;

	// self.ctx.clearRect(0, 0, self.width, self.height);

	//self.update();
	self.player.draw();
	self.check();
	self.draw(); 

	window.requestAnimationFrame(function () {
		self.frame();		
	});
};
