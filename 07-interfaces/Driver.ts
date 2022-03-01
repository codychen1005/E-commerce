import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";


let myCricketCoach = new CricketCoach();
let myGoldCoach = new GolfCoach();

let coaches: Coach[] = [];

coaches.push(myCricketCoach);
coaches.push(myGoldCoach);

for( let tempCoaches of coaches){
    console.log(tempCoaches.getDailyWorkout());
    console.log();
}