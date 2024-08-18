import { IsPlayer } from '../Interfaces/isPlayer.js';

export class Player implements IsPlayer {
    constructor(
        public name : string,
        public age : number,
        readonly country : string
    ) 
    {}

    play () {
        console.log(`${this.name} from ${this.age} is playing!`);
    }
}