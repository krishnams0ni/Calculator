function calculate(toCalc) {
    let mul;
    toCalc.split("*").forEach((m, index) => {
        if (index === 0) {
            mul = divide(m);
        } else {
            mul *= divide(m);
        }
    });
    return mul;

    function divide(toDiv) {
        let div;
        toDiv.split("/").forEach((d, index) => {
            if (index === 0) {
                div = add(d);
            } else {
                div /= add(d);
            }
        });
        return div;
    }

    function add(toAdd) {
        let add = 0;
        toAdd.split("+").forEach((a) => {
            add += subtract(a);
        });
        return Number(add);
    }

    function subtract(toSub) {
        let sub = 0;
        toSub.split("-").forEach((a, index) => {
            if (index === 0) {
                sub = Number(a);
            } else {
                sub -= Number(a);
            }
        });
        return sub;
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
