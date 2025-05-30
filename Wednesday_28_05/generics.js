"use strict";
class Random {
    constructor(name) {
        this.name = name;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    random() {
        return `For ${this.name} the ticket is ${this.ticket}`;
    }
}
let random = new Random('John');
random.setTicket('A24');
console.log(random.random());
let random1 = new Random('Jane');
random1.setTicket(42);
console.log(random1.random());
