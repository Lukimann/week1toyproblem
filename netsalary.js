const prompt=require("prompt-sync")({sigint:true});
let TaxablePay = prompt("Enter your salary: ");

function paye() {
    if (TaxablePay <= 24000) {
        console.log(TaxablePay * 10/100);

    } else if (TaxablePay > 24000 && TaxablePay <= 32333) {
        console.log(TaxablePay * 25/100);
    
    } else if (TaxablePay >= 32334 && TaxablePay <= 500000) {
        console.log(TaxablePay * 30/100);

    } else if (TaxablePay >= 500001 && TaxablePay <= 800000) {
        console.log(TaxablePay * 32.5/100);

    } else if (TaxablePay > 800000) {
        console.log(TaxablePay * 35/100);
    }
}paye()

function nhifDeduction(contrIbution) {
    if (TaxablePay >= 20000 && TaxablePay <= 24999) {
        console.log(contrIbution == 750);

    } else if(TaxablePay >= 25000 && TaxablePay <= 29999) {
        console.log(contrIbution == 850);

    } else if(TaxablePay >= 30000 && TaxablePay <= 34999) {
        console.log(contrIbution == 900);

    } else if(TaxablePay >= 35000 && TaxablePay <= 39999) {
        console.log(contrIbution == 950);

    } else if(TaxablePay >= 40000 && TaxablePay <= 44999) {
        console.log(contrIbution == 1000);

    }  else if(TaxablePay >= 45000 && TaxablePay <= 49999) {
        console.log(contrIbution == 1100);

    } else if(TaxablePay >= 50000 && TaxablePay <= 59999) {
        console.log(contrIbution == 1200);

    } else if(TaxablePay >= 60000 && TaxablePay <= 69999) {
        console.log(contrIbution == 1300)
    }

/*let TaxablePay = 24000;
let paye = TaxablePay * (10/100);
function result() {
    return paye;
}*/
//console.log(paye)
