const prompt=require("prompt-sync")({sigint:true});
//above code was used to initialize prompt to my code.

let basicSalary =parseFloat(prompt("Enter your basicSalary: "));
//this code manually prompts the user to key in their basic salary.

let bonus = 0;
let allowances = 0;
let relief = 5000 + 9000 + 2400;
//the three undefined variables above were added to aid in calculating the gross salary.

function paye() {
    if (basicSalary <= 24000) {
        return (basicSalary * 10/100);
//function paye is meant to calculate the pay as you earn for different salary brackets

    } else if (basicSalary > 24000 && basicSalary <= 32333) {
        return (basicSalary * 25/100);
 //for people earning above 24000 t0 32333, 25 percent of your pay is deducted as PAYE.
    
    } else if (basicSalary >= 32334 && basicSalary <= 500000) {
        return (basicSalary * 30/100);

    } else if (basicSalary >= 500001 && basicSalary <= 800000) {
        return (basicSalary * 32.5/100);

    } else if (basicSalary > 800000) {
        return (basicSalary * 35/100);
//Salaries greater than 800k have a blanket deduction of 35%
    }
}
//this will put the amount that remains after PAYE has been deducted to a variable called payResult.
let payeResult = paye();

//Here I was calculating the nhif deductions for different salary brackets.
function nhifDeduction() {
    if (basicSalary >= 20000 && basicSalary <= 24999) {
        return 750;

    } else if(basicSalary >= 25000 && basicSalary <= 29999) {
        return 850;

    } else if(basicSalary >= 30000 && basicSalary <= 34999) {
        return 900;

    } else if(basicSalary >= 35000 && basicSalary <= 39999) {
        return 950;

    } else if(basicSalary >= 40000 && basicSalary <= 44999) {
        return 1000;

    }  else if(basicSalary >= 45000 && basicSalary <= 49999) {
        return 1100;

    } else if(basicSalary >= 50000 && basicSalary <= 59999) {
        return 1200;

    } else if(basicSalary >= 60000 && basicSalary <= 69999) {
        return 1300;

    } else if(basicSalary >= 70000 && basicSalary <= 79999) {
        return 1400;

    } else if(basicSalary >= 80000 && basicSalary <= 89999) {
        return 1500;

    } else if(basicSalary >= 90000 && basicSalary <= 99999) {
        return 1600;

    } else if(basicSalary > 100000) {
        return 1700;
//for those earning a salary of above 100000, a blanket deduction of 1700 is done.
    }
}

let nhifDeductionsResult = nhifDeduction();

//this function calculates the nssf deductions.
function nssfDeducts() {
    return basicSalary * 6/100;
}

let nssfDeductionsResult = nssfDeducts();

//gross salary is the total amount of money earned by an employee before the deductions. It also includes bonuses and allowances,
let grossSalary = basicSalary + bonus + allowances;

//net salary is the amount that remains after all the deductions(taxes) have been removed.
let netSalary = grossSalary - relief - payeResult - nhifDeductionsResult - nssfDeductionsResult;