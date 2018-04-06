'use strict';

function Obstacle(ctx, width, height) {
  var self = this;

  self.ctx = ctx;
  self.size = 50;
  self.y = Math.random () * height - self.size;
  self.x = Math.random() * width - self.size;
  self.beerSpeed = 12;
  self.img = document.getElementById("beer");
}

Obstacle.prototype.draw = function () {
  var self = this;

 /* self.ctx.fillStyle = 'blue';
  self.ctx.fillRect(self.x, self.y, self.size, self.size);
  */

 self.ctx.drawImage(self.img, self.x, self.y, self.size, self.size);
 //self.x++;
 
}


