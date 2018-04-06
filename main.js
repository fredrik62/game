'use strict'

function createHtml(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}


function main() {
  var game;
  var mainContentElement = document.querySelector('.main-content');

  
  // -- TITLE SCREEN

  var titleScreenElement;
  var startButtonElement;

  function handleStartClick() {
    destroyTitleScreen();
    buildGameScreen();
  }

  function buildTitleScreen() {
    titleScreenElement = createHtml(`
      <div class="main-screen">
        <p class="zulrah-title">Keep Zulrah Wasted</p>
        <div class="buttons">
          <button class="read-instructions-btn">Read Instructions</button>
          <button class="start-game-btn">Start Game</button>
            <embed src="/home/fredrik/Downloads/lumbridge.mp3" width="180" height="90" loop="true" autostart="false" hidden="true" />

        </div>         
      </div>`);
    mainContentElement.appendChild(titleScreenElement);
    startButtonElement = titleScreenElement.querySelector('.start-game-btn');
    startButtonElement.addEventListener('click', handleStartClick);
  }

  function destroyTitleScreen() {
    titleScreenElement.remove();
    startButtonElement.removeEventListener('click', handleStartClick);
  }



  // -- GAME SCREEN

  var game;
  var gameScreenElement;

  function gameEnded() {
    destroyGameScreen();
    buildGameOverScreen();
    movementListener();
    
  }
  function movementListener() {

    document.addEventListener("keydown", function (event) {
      game.player.handleKeyDown(event); 
    });   
  }


  function buildGameScreen() {
    gameScreenElement = createHtml(`
      <div class="game-screen">
        <img id="beer" src="https://vignette.wikia.nocookie.net/2007scape/images/5/5e/Asgarnian_ale_detail.png/revision/latest?cb=20130409194357">
        <img id="zulrah-icon" src="https://i.imgur.com/b27Sk5d.png">

        <canvas id="canvas">
        </canvas> 
        
        <embed src="/home/fredrik/Downloads/swamp.mp3" width="180" height="90" loop="true" autostart="false" hidden="true" />

      </div>`);
    mainContentElement.appendChild(gameScreenElement); // https://i.imgur.com/b27Sk5d.png
    var canvas = document.getElementById("canvas");

    game = new Game(canvas);
    movementListener();
    game.onEnded(gameEnded);
    game.zulrahLife();

   //window.setTimeout(gameEnded, 10000);
  }

  function destroyGameScreen() {
    gameScreenElement.remove();
    game.destroy();
  }

  /*
  function destroyGameScreen() {
    game.destroy();
  }
  */

  
  // -- GAME OVER SCREEN

  var gameOverScreenElement;
  var restartGameButtonElement;

  function handleRestartClick() {
    destroyGameOverScreen();
    buildGameScreen();
  }

  function buildGameOverScreen() {
    gameOverScreenElement = createHtml(`
      <div class="main-screen">
        <p class="zulrah-title">Thank you for Playing!</p>
        <p class="death"></p> 
        <div class="buttons">
          <button class="start-game-btn">Play again</button>
        </div>         
      </div>`);

    mainContentElement.appendChild(gameOverScreenElement);
    gameOverScreenElement.querySelector(".death").innerHTML = "you have " + game.score + " points";
    restartGameButtonElement = gameOverScreenElement.querySelector('.start-game-btn');
    debugger;
    restartGameButtonElement.addEventListener('click', destroyGameOverScreen);
  }

  function destroyGameOverScreen() {
    gameOverScreenElement.remove();
    buildGameScreen();
  }

  
  // -- start the app

  buildTitleScreen();
}

window.addEventListener('load', main);
