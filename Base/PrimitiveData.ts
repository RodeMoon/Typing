let studyJavaScript: boolean = true;
const myname: string = "Mery";
const age: number = 23;

let team1: number = 11;
let team2: number = 11;
let mery: number = 2;
let iplay: boolean = true;

const str: string = `Hi, my name is ${myname} w ${age} years old.`;
console.log(str);

if(studyJavaScript == true){
    console.log(myname.toUpperCase());
    console.log(myname.length);
    console.log(age);
    console.log("U can continue in this page!");
}else{
    console.log("Then go away and study some JavaScript!");
}

function play(dreamTeam1: number, dreamTeam2: number, iplay: boolean): void {
    let motive: string = " ";
    if(iplay == true) {
        dreamTeam1 += mery;
        motive = ' thats cause im playing dude';
    }
    if(dreamTeam1 > dreamTeam2) console.log(`TEAM 1 WINS!!${motive}`);
    if(dreamTeam1 == dreamTeam2) console.log('THERE IS AND EMPA!!');
    if(dreamTeam1 < dreamTeam2) console.log('TEAM 2 WINS!!');
}

play(team1, team2, iplay);
