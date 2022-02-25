var sportsOne = ["Golf", "Basketball", "Tennis"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
//simplied for-loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Golf") {
        console.log(tempSport + " is my favorite sport!");
    }
    else {
        console.log(tempSport);
    }
}
