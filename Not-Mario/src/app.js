"use strict";

/* Classes and Libraries */
const Game = require('./game');
const Player = require('./player');
const EntityManager = require('./entity_manager');


/* Global variables */
var canvas = document.getElementById('screen');
var game = new Game(canvas, update, render);
var input = {
  up: false,
  down: false,
  left: false,
  right: false
}
var player = new Player();
//var img = new Image(
//img.src = 'assets/death_scythe.png';


 
/**
 * @function onkeydown
 * Handles keydown events
 */
window.onkeydown = function(event) {
  switch(event.key) {
    case "ArrowUp":
    case "w":
      input.up = true;
	  
	   
	  //player.changeAnimation("moving up");
	   
      event.preventDefault();
      break;
    case "ArrowDown":
    case "s":
      input.down = true;
	   
	  //player.changeAnimation("moving down");
	   
      event.preventDefault();
      break;
    case "ArrowLeft":
    case "a":
      input.left = true;
	   
	  //player.changeAnimation("moving left");
	   
      event.preventDefault();
      break;
    case "ArrowRight":
    case "d":
      input.right = true;
	   
	  //player.changeAnimation("moving right");
	  
      event.preventDefault();
      break;
  }
}

/**
 * @function onkeyup
 * Handles keydown events
 */
window.onkeyup = function(event) {
  switch(event.key) {
    case "ArrowUp":
    case "w":
      input.up = false;
	 
	  player.changeAnimation("stand still");

      event.preventDefault();
      break;
    case "ArrowDown":
    case "s":
      input.down = false;
	  player.changeAnimation("stand still");
      event.preventDefault();
      break;
    case "ArrowLeft":
    case "a":
      input.left = false;
	  player.changeAnimation("stand still");
      event.preventDefault();
      break;
    case "ArrowRight":
    case "d":
      input.right = false;
	  player.changeAnimation("stand still");
      event.preventDefault();
      break;
  }
}

/**
 * @function masterLoop
 * Advances the game in sync with the refresh rate of the screen
 * @param {DOMHighResTimeStamp} timestamp the current time
 */
var masterLoop = function(timestamp) {
  game.loop(timestamp);
  window.requestAnimationFrame(masterLoop);
}
EntityManager.loadAssets(masterLoop); /* add the filenames of all of the images/sounds you want to load in entity_manager.js (images/soundsToLoad) */
                                      /* access images and sounds with EntityManager.images(filename) / EntityManager.sounds(filename) */

/**
 * @function update
 * Updates the game state, moving
 * game objects and handling interactions
 * between them.
 * @param {DOMHighResTimeStamp} elapsedTime indicates
 * the number of milliseconds passed since the last frame.
 */
function update(elapsedTime) {

   
  
  player.update(elapsedTime,input);
 
   
}

/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {DOMHighResTimeStamp} elapsedTime indicates
  * the number of milliseconds passed since the last frame.
  * @param {CanvasRenderingContext2D} ctx the context to render to
  */
function render(elapsedTime, ctx) {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 1024, 786);
 
  player.render(elapsedTime, ctx);
  //ctx.drawImage( img,xPlaceInImage+spirteWidth*animationCounter , yPlaceInImage, spirteWidth,spirteHeight, 50, 50, widthInGame,heightInGame);
  ctx.drawImage(EntityManager.images("death_scythe.png"), 500, 500);
  ctx.save();
   
  ctx.restore();
 
   
}



/**
  * @function renderWorld
  * Renders the entities in the game world
  * IN WORLD COORDINATES
  * @param {DOMHighResTimeStamp} elapsedTime
  * @param {CanvasRenderingContext2D} ctx the context to render to
  */
 
