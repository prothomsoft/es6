import Mortage  from './mortage';

document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let mortage = new Mortage(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = mortage.monthlyPayment.toFixed(2);
});