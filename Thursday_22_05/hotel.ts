class Manager {
    name: string;
    id: number;
    phoneNo: number;
    location?: string;

    constructor(name: string, id: number, phoneNo: number, location: string) {
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
    name: string;
    id: number;
    location: string;

    constructor(name: string, id: number, location: string) {
        this.name = name;
        this.id = id;
        this.location = location;
    }

    takeOrders() {
        console.log(`${this.name} is taking orders.`);
    }
}

class foodItems {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

class Inventory {
    type: string;
    status: string;

    constructor(type: string, status: string) {
        this.type = type;
        this.status = status;
    }
}

class Guest {
    name: string;
    id: number;
    phoneNo: number;
    address: string;
    roomNo: number;

    constructor(name: string, id: number, phoneNo: number, address: string, roomNo: number) {
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
    name: string;
    id: number;
    location: string;

    constructor(name: string, id: number, location: string) {
        this.name = name;
        this.id = id;
        this.location = location;
    }

    cleanRoom() {
        console.log(`${this.name} is cleaning the room.`);
    }
}

class Recepcionist {
    name: string;
    id: number;
    phoneNo: number;
    location: string;

    constructor(name: string, id: number, phoneNo: number, location: string) {
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
    roomNo: number;
    location: string;

    constructor(roomNo: number, location: string) {
        this.roomNo = roomNo;
        this.location = location;
    }
}

class Bill {
    billNo: number;
    guestName: string;

    constructor(billNo: number, guestName: string) {
        this.billNo = billNo;
        this.guestName = guestName;
    }
}

const manager = new Manager(
    'Joyce',
    1,
    4121342695,
    'MaHOUSEEEEEEEE'
);

manager.purchaseInventory();
console.log(manager);

const chef = new Chef(
    'Alfito',
    2,
    'MaaahOUSEEE too'
);

chef.takeOrders();
console.log(chef);

const food = new foodItems(
    'Una burguir :3',
    3
);

console.log(`The food that ${chef.name} is serving today is: ${food.name}.`);

const inventory = new Inventory(
    'foodie',
    'used?'
);

console.log(inventory);

const guest = new Guest(
    'Cheetito',
    4,
    4121239870,
    'MAHoUSEEEEE',
    127
);

guest.checkIn();
console.log(`${guest.name} is arguing w the manager ${manager.name}.`);

const housekeeping = new Housekeeping(
    'Mich',
    5,
    'IS Housee'
);

housekeeping.cleanRoom();
console.log(`Cause ${chef.name} spilled all the burguir ):`);

const recepcionist = new Recepcionist(
    'Marko',
    6,
    127,
    'Canada'
);

console.log(`The recepcionist ${recepcionist.name} is doing nothing to:`);
recepcionist.acceptCustomerFeedback();

const room = new Rooms(
    127,
    'Canada'
);

console.log(room);

const bill = new Bill(
    1,
    'Cheetito'
);

console.log(bill);