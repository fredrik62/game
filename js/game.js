'use strict';

var SPEED = 12;

function Game(canvas){
	var self = this;

	self.canvas = canvas;
	self.ctx = canvas.getContext("2d");

	self.callback = null;

	self.width = 1000;
	self.height = self.width / 1.77;

	self.ctx.canvas.width = self.width;
	self.ctx.canvas.height = self.height;
	

	self.player = new Player(self.ctx);
	self.obstacle = new Obstacle(self.ctx, self.width, self.height);
	self.score = 0;
	self.gameOver = false;
	self.img = document.getElementById("beer");
	self.progress = document.getElementById("myProgress");
  self.time = 30;
	
	self.frame();
	self.intervalId = null;
};

Game.prototype.onEnded = function(cb){
	var self = this;

	self.callback = cb;

}


Game.prototype.drawPoints = function() {
	var self = this;

		self.ctx.font = "40px Arial";
		self.ctx.font = "bold 40pt Courier";
		self.ctx.fillStyle = 'white';
		self.ctx.textAlign="center"; 
		self.ctx.fillText("Zulrah has had " + self.score + " beer(s)", 550, 50);	
		

};

Game.prototype.zulrahLife = function(){
	var self = this;
	self.intervalId = setInterval(function() {
		 self.time--;
		 console.log(self.time);
		 if(self.time <= 0){
			 clearInterval(self.intervalId)
			 self.callback();
		 }
	}, 1000);
}

Game.prototype.check = function () {
  var self = this;

	if (self.obstacle.x < self.player.x && self.player.x < self.obstacle.x + self.obstacle.size) {
		if (self.obstacle.y < self.player.y && self.player.y < self.obstacle.y + self.obstacle.size){
			console.log("collision left top");
			self.score++;
			self.obstacle = new Obstacle(self.ctx, self.width, self.height);
			
		} else if (self.obstacle.y < self.player.y + self.player.size && self.player.y + self.player.size < self.obstacle.y + self.obstacle.size){
			console.log("collision left down");
			self.score++;
			self.obstacle = new Obstacle(self.ctx, self.width, self.height);
			
		}
	}

	if (self.obstacle.x < self.player.x + self.player.size && self.player.x + self.player.size < self.obstacle.x + self.obstacle.size) {
		if (self.obstacle.y < self.player.y && self.player.y < self.obstacle.y + self.obstacle.size){
			console.log("collision right top");
			self.score++;
			self.obstacle = new Obstacle(self.ctx, self.width, self.height);
			
		}else if (self.obstacle.y < self.player.y + self.player.size && self.player.y + self.player.size < self.obstacle.y + self.obstacle.size){
			console.log("collision right down");
			self.score++;
			self.obstacle = new Obstacle(self.ctx, self.width, self.height);
			
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
	self.ctx.fillStyle = 'blue';
	self.ctx.fillRect(0, 100, ((self.width * self.time) / 30), 20);

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
