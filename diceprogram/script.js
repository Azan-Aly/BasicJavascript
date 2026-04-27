function check() {
    let numInput = document.getElementById("num");
    let num = Number(numInput.value);

    let result = document.getElementsByClassName("result")[0];
    result.textContent = ""; // Clear previous result

    if (num >= 1 && num <= 6) {
        let rolls = [];
        let dice = [];
        for (let i = 0; i < num; i++) {
            let random = Math.floor(Math.random() * 6 + 1);
            rolls.push(random);
            
            // Use template literals correctly and push as string
            dice.push(`<img src="dice/${random}.png" alt="dice">`);
        }
        result.innerHTML = "Rolled: " + rolls.join(", ");
        result.innerHTML += "<br>" + dice.join(" ");
    } else {
        result.textContent = "Enter a valid input between 1 and 6.";
    }
}
