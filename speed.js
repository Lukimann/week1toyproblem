const prompt = require("prompt-sync")({ sigint: true });
//this code is what i used to initialize prompt in my challenge. Before this, prompt wasn't working

//to make things easier, i created all the required variables before declaring my function.
let speed = prompt("Enter your speed: ");
//speed is to be keyed in by the user, the terminal is configured to accept any speed.

let allowedSpeed = 70;
//the allowed speed limit is set at 70.

let extraSpeedPerDemerit = 5;
//if you surpassed the allowed speed limit by 5, you are to recieve a demerit point of one.

let demeritPoints = (speed - allowedSpeed) / extraSpeedPerDemerit;
//demerit points are calculated by - your speed by the allowed speed then / remainder by 5.

let maxPoints = 12;
//if you were issued 12 points and more, a return value of "License suspended" is displayed.

function speedChecker() {
  if (speed <= allowedSpeed) {
    return "Ok";
    //i created a function speedChecker that will house my code. If recorded speed is below the allowed speed, a return of "Ok" was expected

  } else if (speed > allowedSpeed) {
    return demeritPoints;
    //if recorded speed is above the allowed speed, the driver is issued with a demerit point of 1 per every 5 kms.

  } else if (demeritPoints >= maxPoints) {
    return "License suspended";
    //if the demerit point exceeded 12 points, a return value of "License suspended" is expected.
  }

  return demeritPoints;
  //else, if demerit point didn't exceed 12 points, it was to be displayed.
}
