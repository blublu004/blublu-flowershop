// Add keyboard support
document.addEventListener("keydown", function (event) {
    const key = event.key;

    // If key is a number or operator
    if (!isNaN(key)) appendValue(key);             // 0–9
    if (["+", "-", "*", "/", "(", ")","."].includes(key)) appendValue(key);

    // Enter = Calculate
    if (key === "Enter") calculate();

    // Backspace = delete last
    if (key === "Backspace") deleteLast();

    // Delete = Clear all
    if (key === "Delete") clearDisplay();

    // Scientific keyboard shortcuts:
    if (key.toLowerCase() === "s") appendFunc("sin");   // s = sin
    if (key.toLowerCase() === "c") appendFunc("cos");   // c = cos
    if (key.toLowerCase() === "t") appendFunc("tan");   // t = tan
    if (key.toLowerCase() === "l") appendFunc("log");   // l = log10
    if (key.toLowerCase() === "n") appendFunc("ln");    // n = ln
    if (key.toLowerCase() === "r") appendFunc("sqrt");  // r = √
    if (key.toLowerCase() === "p") appendValue("Math.PI"); // p = π
    if (key.toLowerCase() === "e") appendValue("Math.E");  // e = Euler constant
});


// FUNCTIONS USED BY BUTTONS & KEYBOARD
function appendValue(value) {
    document.getElementById("display").value += value;
}

function appendFunc(func) {
    let display = document.getElementById("display");

    switch (func) {
        case "sin":
            display.value += "Math.sin(";
            break;
        case "cos":
            display.value += "Math.cos(";
            break;
        case "tan":
            display.value += "Math.tan(";
            break;
        case "log":
            display.value += "Math.log10(";
            break;
        case "ln":
            display.value += "Math.log(";
            break;
        case "sqrt":
            display.value += "Math.sqrt(";
            break;
        case "pow2":
            display.value += "**2";
            break;
        case "pow3":
            display.value += "**3";
            break;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}
