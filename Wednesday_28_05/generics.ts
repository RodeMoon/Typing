class Random <T>{
    private ticket?: T;

    constructor(private name:string){}

    setTicket(ticket: T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket;
    }

    public random(): string{
        return `For ${this.name} the ticket is ${this.ticket}`;
    }
}

let random = new Random<string>('John');
random.setTicket('A24');
console.log(random.random());

let random1 = new Random<number>('Jane');
random1.setTicket(42);
console.log(random1.random());