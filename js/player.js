function Player (ctx) {
    var self = this;

    self.x = 800;
    self.y = 600;

    self.speed = SPEED;

    self.ctx = ctx;
}


Player.prototype.draw = function() {
    var self = this;

    self.ctx.fillStyle = 'red';
    self.ctx.fillRect(self.x, self.y, 10, 10);


}







Player.prototype.moveUp = function() {
    var self = this;
    if(self.y - 1 >= 10){
      self.y -= self.speed;
    }
  };
  Player.prototype.moveDown = function() {
    var self = this;
    if(self.y + 1 <= 1000) {
      self.y += self.speed;
    }
  };
  Player.prototype.moveRight = function() {
    var self = this;
    if(self.x + 1 <= 1000)
    self.x += self.speed;
  };
  Player.prototype.moveLeft = function() {
    var self = this;
    if(self.x - 1 >= 10)
    self.x -= self.speed;
  };
  // ----------- Update---------------
  Player.prototype.update = function() {
    var self = this;
    document.onkeydown = function(event) {
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
  }

/*
Player.prototype.move = function(event) {
    var self = this;
    
    console.log(event.keyCode);
    if(event.keyCode === "38") {
        self.y += 1;
    } else if (event.keyCode === "40") {
        self.y -= 1;
    } else if (event.keyCode === "37") {
        self.x -= 1;
    } else if (event.keyCode === "39") {
        self.x += 1;
    }

    event.preventDefault();

}
*/
