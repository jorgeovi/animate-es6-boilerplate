import $ from 'jquery';
window.$ = $;
import Preloader from './preloader/Preloader';
import Game from './Game';


window.game = new Game();
window.preloader = new Preloader();