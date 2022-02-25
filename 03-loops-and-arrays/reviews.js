var reviews = [1, 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("The review average is ".concat(average));
