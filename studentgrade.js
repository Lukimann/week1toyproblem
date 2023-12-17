const prompt=require("prompt-sync")({sigint:true})
//the above code is what i used to initialize prompt that is required in the challenge.

function studentMarks() {
    //When you run this code, it will prompt you to enter your marks.
    let marks = prompt("Enter your marks: ");
    if (marks > 79) {
        return "A";
    //if you input marks from 80 - 100, the terminal will display a grade of 'A'.
    } else if(marks >= 60 && marks <= 79) {
        return "B";
    //if marks are within the range of 60 - 79, your grade will be a 'B'.
    } else if(marks > 49 && marks <= 59) {
        return "C";
    //if you key in anything from 50 - 59, you will have scored a 'C'.
    } else if(marks >= 40 && marks <= 49) {
        return "D";
    // a grade of 'D' is within the range of 40 to 49.
    } else if (marks < 40) {
        return "E"
    }
    //Anything less than 40 will give you a grade of 'E'.
}