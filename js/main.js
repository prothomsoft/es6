import * as mortage from './mortage';

document.getElementById('calcBtn').addEventListener('click', function () {
    var principal1 = document.getElementById("principal").value;
    var years1 = document.getElementById("years").value;
    var rate1 = document.getElementById("rate").value;

    let { principal, years, rate, monthlyPayment, monthlyRate } = mortage.calculateMonthlyPayment(principal1, years1, rate1);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
});