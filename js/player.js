'use strict';

function Player (ctx) {
  var self = this;

  self.x = 0;
  self.y = 0;
  self.size = 50;

  self.speed = SPEED;

  self.ctx = ctx;

  self.width = 1000;
	self.height = self.width / 1.77;

	self.ctx.canvas.width = self.width;
  self.ctx.canvas.height = self.height;
  
  self.img = document.getElementById("beer");
}


Player.prototype.moveUp = function() {
  var self = this;
  if (self.y - 1 >= 10) {
    self.y -= self.speed;
  }
};

Player.prototype.moveDown = function() {
  var self = this;
  if (self.y + 1 <= 1500) {
    self.y += self.speed;
  }
};

Player.prototype.moveRight = function() {
  var self = this;
  if (self.x + 1 <= 1 <= 1500) {
    self.x += self.speed;
  }
};

Player.prototype.moveLeft = function() {
  var self = this;
  if (self.x - 1 >= 10) {
    self.x -= self.speed;
  }
};

// ----------- Update---------------
Player.prototype.handleKeyDown = function(event) {
  var self = this;
  
  switch (event.keyCode) {
    case 38:
      self.moveUp();
      break;
    case 40:
      self.moveDown();
      break;
    case 37:
      self.moveLeft();
      break;
    case 39:
      self.moveRight();
      break;
  }
};


Player.prototype.draw = function() {
  var self = this;

  self.ctx.drawImage(self.img, self.x, self.y, self.size, self.size);
};



