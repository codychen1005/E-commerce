let sportsOne: string[] = ["Golf", "Basketball", "Tennis"];

for (let i = 0; i < sportsOne.length; i++) {
  console.log(sportsOne[i]);
}

//simplied for-loop

for (let tempSport of sportsOne) {
  if (tempSport == "Golf") {
    console.log(tempSport + " is my favorite sport!");
  } 
  else {
    console.log(tempSport);
  }
}
