"use strict";
const object1 = {
    user: "Joy",
    nacionality: "MEX",
    profesion: "Dummer",
    myBiopic() {
        console.log(`HI! MY NAME IS ${this.user} (wHAAAAAAAT?). I'm a ${this.profesion} from ${this.nacionality}`);
    },
};
console.log(object1.user);
console.log(object1.nacionality);
console.log(object1.profesion);
console.log(object1.myBiopic());
