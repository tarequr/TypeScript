import { Player } from "./classes/Player.js";
const tamim = new Player('Tamim', 38, 'Bangladesh');
const miraz = new Player('Miraz', 28, 'Bangladesh');
console.log(tamim.age);
console.log(tamim.country);
const players = [];
players.push(tamim);
players.push(miraz);
// NOTE
// ->Change the "module": "ES2015",    tsconfig.json
// ->Change the type="module" <script type="module" src="./output/script.js"></script>
