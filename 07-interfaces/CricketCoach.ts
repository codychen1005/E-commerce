import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkout(): string {
        return "Practice your bowling techniques 100 times";
    }
    
}