'use strict';

function SafePosition(x, y, ctx) {
  var self = this;

  self.ctx = ctx;
  self.y = y;
  self.x = x;
  self.size = 100;
}

SafePosition.prototype.draw = function () {
  var self = this;

  self.ctx.fillStyle = 'red';
  self.ctx.fillRect(self.x, self.y, self.size, self.size);
};
