'use strict';

function Player (ctx) {
  var self = this;

  self.x = 800;
  self.y = 600;
  self.size = 100;

  self.speed = SPEED;

  self.ctx = ctx;
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
  if (self.x + 1 <= 1500) {
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

  self.ctx.fillStyle = 'blue';
  self.ctx.fillRect(self.x, self.y, self.size, self.size);

  // self.ctx.beginPath();
  // self.ctx.arc(self.x, self.y, 30, 0,2 * Math.PI, false);
  // self.ctx.stroke();
};