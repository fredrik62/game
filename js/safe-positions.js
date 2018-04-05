'use strict';

function Obstacle(x, y, ctx) {
  var self = this;

  self.ctx = ctx;
  self.y = Math.random () * 500;
  self.x = Math.random() * 880;
  self.size = 50;
  self.beerSpeed = 12;
}

Obstacle.prototype.draw = function () {
  var self = this;

 /* self.ctx.fillStyle = 'blue';
  self.ctx.fillRect(self.x, self.y, self.size, self.size);
  */
 var img = document.getElementById("beer");

 self.ctx.drawImage(img, self.x, self.y, self.size, self.size);
 self.x++;
 
}

/*
Obstacle.prototype.info = function() {
  var self = this;
  self.ctx.font = "30px Arial";
  self.ctx.fillText("Hello World",10,50);

}
*/