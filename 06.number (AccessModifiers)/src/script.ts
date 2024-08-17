class Player {
    private name : string;
    public age : number;
    readonly country : string;

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
