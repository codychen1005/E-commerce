import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkout(): string {
        return "Make sure you do 100 golf swings for practice";
    }
    
}