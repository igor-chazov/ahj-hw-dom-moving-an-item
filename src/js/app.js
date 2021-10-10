import GamePlay from './gameplay';

const gamePlay = new GamePlay(4);
gamePlay.bindToDOM(document.querySelector('#game-container'));

gamePlay.drawUi();
gamePlay.startRandom();
