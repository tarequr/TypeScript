import { Player } from "./classes/Player.js";
import { IsPlayer } from "./Interfaces/isPlayer.js";

const tamim = new Player('Tamim', 38, 'Bangladesh');

let miraz : IsPlayer;  // interface for player
miraz = new Player('Miraz', 28, 'Bangladesh');

console.log(tamim.age);
console.log(tamim.country);

const players: Player[] = [];

players.push(tamim);
players.push(miraz);



// Example 2:

// interface RectangleOptions {
//     width: number;
//     length: number;
// }

// function drawRectangle(options: RectangleOptions) {
//     let width = options.width;
//     let length = options.length;
// }

// drawRectangle({
//     width: 30,
//     length: 50,
// });