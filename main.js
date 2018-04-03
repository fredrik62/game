
'use strict'

function createHtml(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}


function main() {
  var game;
  var mainContentElement = document.getElementsByClassName('main-content');

  // -- TITLE SCREEN

  var titleScreenElement;
  var startButtonElement;

  function handleStartClick() {
    destroyTitleScreen();
    buildGameScreen();
  }

  function buildTitleScreen() {
    titleScreenElement = createHtml(`<div class="main-screen">
    <p class="zulrah-title">ZULRAH SIMULATOR</p>
    <div class="buttons">
    <button class="read-instructions-btn">Read Instructions</button>
     <button class="start-game-btn">Start Game</button>
     </div>         
    </div>`);
    mainContentElement[0].appendChild(titleScreenElement);
    startButtonElement = titleScreenElement.querySelector('.start-game-btn');
    startButtonElement.addEventListener('click', handleStartClick);
  }

  function destroyTitleScreen() {
    titleScreenElement.remove();
    startButtonElement.removeEventListener('click', handleStartClick);
  }


  // -- GAME SCREEN

  var game;

  function gameEnded() {
    destroyGameScreen();
    buildGameOverScreen();
  }



    var gameScreenElement;

    function buildGameScreen() {
    gameScreenElement = createHtml(`
    <div class="game-screen">
    <canvas id="canvas")></canvas>        
    </div>`);
    mainContentElement[0].appendChild(gameScreenElement);

    var canvas = document.getElementById("canvas");
/*
    var canvasWidth = window.innerWidth;
    var canvasHeight = window.innerHeight;
*/
    game = new Game(canvas);

    document.addEventListener("keydown", function(event){
       game.player.update(event);
    });
  }

  function destroyGameScreen() {
    game.destroy();
  }


  // -- GAME OVER SCREEN

  var gameOverScreenElement;
  var restartGameButtonElement;

  function handleRestartClick() {
    destroyGameOverScreen();
    buildGameScreen();
  }

  function buildGameOverScreen() {
    gameOverScreenElement = createHtml(`<div class="main-screen">
    <p class="zulrah-title">ZULRAH SIMULATOR</p>
    <p class="death">Oh no! Zulrah has destroyed you!</p>
    <div class="buttons">
    <button class="restart-game-btn">Restart Game</button>
     </div>         
     </div>`);
    mainContentElement[0].appendChild(gameOverScreenElement);
    restartGameButtonElement = gameOverScreenElement.querySelector('button');
    restartGameButtonElement.addEventListener('click', handleRestartClick);
  }

  function destroyGameOverScreen() {
    gameOverScreenElement.remove();
    restartGameButtonElement.removeEventListener('click', handleRestartClick);
  }

  // -- start the app

  buildTitleScreen();
}

window.addEventListener('load', main);





