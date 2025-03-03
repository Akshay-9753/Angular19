// Function to Append Values to Display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to Clear Display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to Delete Last Character
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Function to Calculate Result
function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
