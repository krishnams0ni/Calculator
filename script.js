let numOne, numTwo, operator;

function calculate(toCalc) {
    toCalc = toCalc.split;
    console.log(toCalc);
}

const displayValue = document.querySelector(".calculate");
displayValue.addEventListener("click", (e) => {
    const displayUpdate = document.querySelector("#displayText");

    if (e.target.textContent === "=") {
        calculate(displayUpdate.textContent);
    } else {
        displayUpdate.textContent += e.target.textContent;
    }
});
