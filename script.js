function calculate(toCalc) {
    let add = 0;
    toCalc.split("+").forEach((m) => {
        add += subtract(m);
    });
    return add;

    function subtract(toSub) {
        let sub = 0;
        toSub.split("-").forEach((s, index) => {
            if (index === 0) {
                sub = divide(s);
            } else {
                sub -= divide(s);
            }
        });
        return sub;
    }

    function divide(toDiv) {
        let div;
        toDiv.split("/").forEach((d, index) => {
            if (index === 0) {
                div = multiply(d);
            } else {
                div /= multiply(d);
            }
        });
        return div;
    }

    function multiply(toAdd) {
        let mul = 1;
        toAdd.split("*").forEach((a) => {
            mul *= a;
        });
        return Number(mul);
    }
}

const displayValue = document.querySelector(".calculate");
displayValue.addEventListener("click", (e) => {
    const displayUpdate = document.querySelector("#displayText");
    const result = document.querySelector("#displayOutput");

    if (e.target.value === "=") {
        result.textContent = calculate(displayUpdate.textContent);
    } else if (e.target.value === "←") {
        displayUpdate.textContent = displayUpdate.textContent.slice(0, -1);
    } else if (e.target.value === "C") {
        displayUpdate.textContent = "";
        result.textContent = "";
    } else {
        displayUpdate.textContent += e.target.value;
    }
});
