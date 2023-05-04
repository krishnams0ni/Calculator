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

    if (e.target.textContent === "=") {
        const result = document.querySelector("#displayOutput");
        result.textContent = calculate(displayUpdate.textContent);
    } else {
        displayUpdate.textContent += e.target.textContent;
    }
});
