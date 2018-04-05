'use strict';

var SPEED = 12;

function Game(canvas){
	var self = this;

	self.canvas = canvas;
	self.ctx = canvas.getContext("2d");

	self.width = 1000;
	self.height = self.width / 1.77;

	self.ctx.canvas.width = self.width;
	self.ctx.canvas.height = self.height;
	
	self.player = new Player(self.ctx);
	self.obstacle = new Obstacle(self.ctx, self.width, self.height);
	self.score = 0;
	self.gameOver = false;
	self.img = document.getElementById("beer");
	
	self.frame();
};

Game.prototype.drawPoints = function() {
	var self = this;

		self.ctx.font = "30px Arial";
		self.ctx.textAlign="center"; 
	  self.ctx.fillText("You have " + self.score + " points" ,500,30);	
};

Game.prototype.check = function () {
  var self = this;

	if (self.obstacle.x < self.player.x && self.player.x < self.obstacle.x + self.obstacle.size) {
		if (self.obstacle.y < self.player.y && self.player.y < self.obstacle.y + self.obstacle.size){
			console.log("collision left top");
			self.score++;
			
		}
		if (self.obstacle.y < self.player.y + self.player.size && self.player.y + self.player.size < self.obstacle.y + self.obstacle.size){
			console.log("collision left down");
			self.score++;
			
		}
	}

	if (self.obstacle.x < self.player.x + self.player.size && self.player.x + self.player.size < self.obstacle.x + self.obstacle.size) {
		if (self.obstacle.y < self.player.y && self.player.y < self.obstacle.y + self.obstacle.size){
			console.log("collision right top");
			self.score++;
			
		}
		if (self.obstacle.y < self.player.y + self.player.size && self.player.y + self.player.size < self.obstacle.y + self.obstacle.size){
			console.log("collision right down");
			self.score++;
			
		}
	}
};

Game.prototype.draw = function() {
	var self = this;
	
	self.player.draw();
  
	self.obstacle.draw();
};


Game.prototype.frame = function() {
	var self = this;

	self.ctx.clearRect(0, 0, self.width, self.height);

	self.drawPoints();
	self.check();
	self.draw(); 

	if (!self.gameOver) {
		window.requestAnimationFrame(function () {
			self.frame();		
		});
	}
};

Game.prototype.destroy = function() {
	var self = this;
	self.gameOver = true;
};
