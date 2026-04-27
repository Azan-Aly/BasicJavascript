function Calculate() {
    const totalAmount = document.getElementById("totalval");
    const principalInput = document.getElementById("Principal");
    const interestInput = document.getElementById("Interest");
    const yearsInput = document.getElementById("years");

    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(interestInput.value) / 100;
    const years = parseFloat(yearsInput.value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        totalAmount.textContent = "Please enter valid numbers!";
        totalAmount.style.color = "red";
        return;
    }

    const amount = principal * Math.pow(1 + rate, years);

    totalAmount.textContent = amount.toFixed(1);
    totalAmount.style.color = "#12ff00";
    totalAmount.style.fontSize = "30px";
}
