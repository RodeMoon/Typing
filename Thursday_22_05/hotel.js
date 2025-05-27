"use strict";
class Manager {
    constructor(name, id, phoneNo, location) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
        this.location = location;
    }
    purchaseInventory() {
        console.log(`${this.name} is purchasing inventory.`);
    }
    recordComplaints() {
        console.log(`${this.name} is recording complaints.`);
    }
    manageStaff() {
        console.log(`${this.name} is managging the staff.`);
    }
}
class Chef {
    constructor(name, id, location) {
        this.name = name;
        this.id = id;
        this.location = location;
    }
    takeOrders() {
        console.log(`${this.name} is taking orders.`);
    }
}
class foodItems {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class Inventory {
    constructor(type, status) {
        this.type = type;
        this.status = status;
    }
}
class Guest {
    constructor(name, id, phoneNo, address, roomNo) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
        this.address = address;
        this.roomNo = roomNo;
    }
    checkIn() {
        console.log(`The guest ${this.name} is cheking in at room ${this.roomNo}.`);
    }
    checkOut() {
        console.log(`The guest ${this.name} is cheking out of room ${this.roomNo}.`);
    }
    payBill() {
        console.log(`${this.name} is paying the bill.`);
    }
    orderFood() {
        console.log(`${this.name} is ordering food.`);
    }
    submitFeedback() {
        console.log(`${this.name} is submiting feedback.`);
    }
}
class Housekeeping {
    constructor(name, id, location) {
        this.name = name;
        this.id = id;
        this.location = location;
    }
    cleanRoom() {
        console.log(`${this.name} is cleaning the room.`);
    }
}
class Recepcionist {
    constructor(name, id, phoneNo, location) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
        this.location = location;
    }
    checkRoomAvailability() {
        console.log(`Checking the availability of the room ${this.id}.`);
    }
    bookRoom() {
        console.log(`Booking the room ${this.id}.`);
    }
    generateBill() {
        console.log(`Generating bill of the room ${this.id}.`);
    }
    acceptCustomerFeedback() {
        console.log(`Accepting the feedback of the room ${this.id}.`);
    }
}
class Rooms {
    constructor(roomNo, location) {
        this.roomNo = roomNo;
        this.location = location;
    }
}
class Bill {
    constructor(billNo, guestName) {
        this.billNo = billNo;
        this.guestName = guestName;
    }
}
const manager = new Manager('Joyce', 1, 4121342695, 'MaHOUSEEEEEEEE');
manager.purchaseInventory();
console.log(manager);
const chef = new Chef('Alfito', 2, 'MaaahOUSEEE too');
chef.takeOrders();
console.log(chef);
const food = new foodItems('Una burguir :3', 3);
console.log(`The food that ${chef.name} is serving today is: ${food.name}.`);
const inventory = new Inventory('foodie', 'used?');
console.log(inventory);
const guest = new Guest('Cheetito', 4, 4121239870, 'MAHoUSEEEEE', 127);
guest.checkIn();
console.log(`${guest.name} is arguing w the manager ${manager.name}.`);
const housekeeping = new Housekeeping('Mich', 5, 'IS Housee');
housekeeping.cleanRoom();
console.log(`Cause ${chef.name} spilled all the burguir ):`);
const recepcionist = new Recepcionist('Marko', 6, 127, 'Canada');
console.log(`The recepcionist ${recepcionist.name} is doing nothing to:`);
recepcionist.acceptCustomerFeedback();
const room = new Rooms(127, 'Canada');
console.log(room);
const bill = new Bill(1, 'Cheetito');
console.log(bill);
