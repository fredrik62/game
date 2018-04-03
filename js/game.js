var SPEED = 4;


function Game(canvas){
    var self = this;

    self.canvas = canvas;
    self.ctx = canvas.getContext("2d");

    self.width = 1600;
    self.height = self.width / 1.77;

    self.ctx.canvas.width = self.width;
    self.ctx.canvas.height = self.height;
    
    self.player = new Player(self.ctx);
    
    
    
    self.frame();
}





Game.prototype.draw = function() {
    var self = this;

    self.player.draw();
    self.player.update();


}

Game.prototype.update = function() {
    var self = this;

    //self.player.move();

}

Game.prototype.frame = function() {
    var self = this;

    self.ctx.clearRect(0,0, 10000,10000);


    self.update();

    self.draw(); 
   

    window.requestAnimationFrame(function(){
        self.frame();
        
    });

}



