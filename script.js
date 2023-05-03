function calculate(toCalc) {
    let mul = toCalc.split("*")[0];
    toCalc.split("*").forEach((m, index) => {
        if (index !== 0) mul *= Number(divide(m));
    });
    return Number(mul);

    function divide(toDiv) {
        let div = toDiv.split("/")[0];
        toDiv.split("/").forEach((d, index) => {
            if (index !== 0) div /= add(d);
        });
        return Number(div);
    }

    function add(toAdd) {
        let add = 0;
        toAdd.split("+").forEach((a) => {
            add += subtract(a);
        });
        return add;
    }

    function subtract(toSub) {
        let sub = toSub.split("-")[0];
        toSub.split("-").forEach((s, index) => {
            if (index !== 0) {
                sub -= s;
            }
        });
        return Number(sub);
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
