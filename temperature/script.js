const textbox = document.getElementById("textbox")
const faren = document.getElementById("faren")
const celcius = document.getElementById("celcius")
const result = document.getElementById("result")

let temp=0;

function convert() {
    if (faren.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F"
    } else if (celcius.checked) {
        
        temp = Number(textbox.value);
        temp = (temp - 32)* 5 / 9 ;
        result.textContent = temp.toFixed(1) + "C";
    } else {
        result.textContent = "Select a unit"
    }
}