function lifeInWeeks(age) {

    var remainingAge = 90 - age;
    var daysLeft = 365 * remainingAge;
    var weeksLeft = 52 * remainingAge;
    var monthLeft = 12 * remainingAge;

    console.log("You have" + " " + daysLeft + " days," + " " + weeksLeft + " " + "weeks," + " " + "and" + " " + monthLeft + " " + "months" + " " + "left.");
}

lifeInWeeks(51);