/**
 * Demo individual taxes on personal income
 * 
 * Block1: Inputs
 * Name, Income, Dependent 
 *
 * 
 * Block2:
 * Declare variables and get value from Form
 * Using function, statement condition if else
 * 
 * 
 * 
 * Block3: Outputs
 * Calculate Taxes and Display on UI
 */
function checkrate(){
    var taxableIncome = calIncomeDep();
    if(taxableIncome <=60e+6){
        // console.log(0.050);
        return 0.050;
    }else if (taxableIncome > 60e+6 && taxableIncome <=120e+6){
        // console.log(0.10);
        return 0.10;
    }else if (taxableIncome > 120e+6 && taxableIncome <=210e+6){
        // console.log(0.15);
        return 0.15;
    }else if (taxableIncome > 210e+6 && taxableIncome <=384e+6){
        // console.log(0.20);
        return 0.20;
    }else if (taxableIncome > 384e+6 && taxableIncome <=624e+6){
        // console.log(0.25);
        return 0.25;
    }else if (taxableIncome > 624e+6 && taxableIncome <=960e+6){
        // console.log(0.30);
        return 0.30;
    }else if (taxableIncome > 960e+6){
        // console.log(0.35);
        return 0.35;

    }
}
function calIncomeDep(){
    var income = document.getElementById("inputIncome").value;
    var dependents =document.getElementById("inputDependent").value;
    var taxableIncome = 0;
    taxableIncome = income - (4e+6) - (dependents * (1.6e+6));
    // console.log(taxableIncome);
    return taxableIncome;
}
function TaxesCalculator(){   
    var name = document.getElementById("inputName").value;
    var PITrate = checkrate();
    var taxableIncome = calIncomeDep();
    individualIncome = taxableIncome * PITrate;
    // console.log(individualIncome,taxableIncome,PITrate);-
    // console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(taxableIncome));
    document.getElementById("txtResult").innerHTML = "Fullname: " + name + "<br>"+ "Individual Taxes Income: "+ (new Intl.NumberFormat('VI', { style: 'currency', currency: 'VND' }).format(individualIncome));
}
document.getElementById("btnTaxes").onclick = TaxesCalculator;