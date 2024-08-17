class Player {
    name : string;
    age : number;
    country : string;

    constructor(nm: string, ag : number, ctry: string) 
    {
        this.name = nm;
        this.age = ag;
        this.country = ctry;    
    }

    play () {
        console.log(`${this.name} from ${this.age} is playing!`);
    }

}

const tamim = new Player('Tamim', 38, 'Bangladesh');
const miraz = new Player('Miraz', 28, 'Bangladesh');


const players: Player[] = [];  // here players type is Player. Actually Player is a class. We can use classes as types if we want.

players.push(tamim);
players.push(miraz);



console.log(tamim);
console.log(miraz.name, miraz.age, miraz.country);
