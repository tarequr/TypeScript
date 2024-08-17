class Player {
    

    constructor(
        private name : string,
        public age : number,
        readonly country : string
    ) 
    {
        //
    }

    play () {
        console.log(`${this.name} from ${this.age} is playing!`);
    }

}

const tamim = new Player('Tamim', 38, 'Bangladesh');
const miraz = new Player('Miraz', 28, 'Bangladesh');
