"use strict" //

function mortgageCalc(principal, interestRate, loanLength) {
    // Convert interest rate from percentage to decimal
    const monthlyInterestRate = interestRate / 100 / 12;
    // Convert loan length from years to months
    const loanMonths = loanLength * 12;

    // Calculate the monthly payment using the compounded interest formula
    const monthlyPayment = (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -loanMonths));


    const totalInterest = (monthlyPayment * loanMonths) - principal;
    console.log(monthlyPayment.toFixed(2) + ' & ' + totalInterest.toFixed(2));

    return (monthlyPayment.toFixed(2) + ' & ' + totalInterest.toFixed(2)); // Round to 2 decimal places
}

function futureValueCalc(deposit, interestRate, loanLength) {
    // Convert annual interest rate to decimal
    let adjustedIR = Number(interestRate) + Number(0.0229);
    const monthlyInterestRate = adjustedIR / 100 / 12;
    // Convert years to months
    const totalMonths = loanLength * 12;

    // Calculate future value using the compounded interest formula
    const futureValue = deposit * Math.pow(1 + monthlyInterestRate, totalMonths);

    // Calculate total interest earned
    const totalInterest = futureValue - deposit;

    return "Future Value is " + futureValue.toFixed(2) + ' and Total Interest is ' + totalInterest.toFixed(2);

}

function parseInfoMortgage() {
    let p = document.getElementById("principleInput").value;
    let i = document.getElementById("interestInput").value;
    let l = document.getElementById("yearInput").value;

    console.log('Inputs: Principle ' + p + ' & Interest ' + i + ' & Year(s) ' + l);

    const outputField = document.getElementById('output');
    outputField.textContent = 'Results are ' + mortgageCalc(p, i, l);
}

function parseInfoFutureValue() {
    let d = document.getElementById("depositInput").value;
    let i = document.getElementById("interestInput").value;
    let l = document.getElementById("yearInput").value;

    console.log('Inputs: Deposit ' + d + ' & Interest ' + i + ' & Year(s) ' + l);

    const outputField = document.getElementById('output');
    outputField.textContent = 'Results are ' + futureValueCalc(d, i, l);
}

function presentValueCalc(PMT, interestRate, periods) {
    const r = interestRate / 100; // Convert interest rate to decimal
    const n = periods * 12;
    const i = r / 12;

    const presentValue = PMT * ((1 / i) - (1 / (i * Math.pow(1 + i, n))));
    console.log(`Present Value of the Ordinary Annuity: ${presentValue.toFixed(2)}`);
    return presentValue;
}

function parseInfoPresentValue() {
    let a = document.getElementById("annuityInput").value;
    let i = document.getElementById("interestInput").value;
    let l = document.getElementById("yearInput").value;

    console.log('Inputs: Annuity ' + a + ' & Interest ' + i + ' & Year(s) ' + l);

    const outputField = document.getElementById('output');
    outputField.textContent = 'Results are ' + (presentValueCalc(a, i, l)).toFixed(2);
}

function clearAll(pageType) {

    console.log('Check');
    if (pageType == 'principleInput') {
        document.getElementById("principleInput").value = null;
    } else if (pageType == 'depositInput') {
        document.getElementById("depositInput").value = null;
    } else if (pageType == 'annuityInput') {
        document.getElementById("annuityInput").value = null;
    }
    document.getElementById("interestInput").value = null;
    document.getElementById("yearInput").value = null;

    const outputField = document.getElementById('output');
    outputField.textContent = '';

}