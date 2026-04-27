const display = document.getElementById("display")

function cal() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"
    }
}