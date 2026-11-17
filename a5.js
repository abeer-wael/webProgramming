function calculate() {
    var billAmount = Number(document.getElementById("billAmount").value);
    var totalTip = billAmount * 0.15;
    var totalBill = billAmount + totalTip;

    let totalBillShow = document.getElementById("totalBill");
    totalBillShow.innerHTML = "Your total BILL is " + totalBill.toFixed(2);

    let totalTipShow = document.getElementById("totalTip");
    totalTipShow.innerHTML = "Your total TIP is " + totalTip.toFixed(2);
}