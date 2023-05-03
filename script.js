let numOne, numTwo, operator;

function calculate(toCalc) {
    let prevNum,
        num = 0;
    let lastOperatorPosition = 0;
    for (let i = 0; i <= toCalc.length; i++) {
        if (
            toCalc[i] === "-" ||
            toCalc[i] === "+" ||
            toCalc[i] === "*" ||
            toCalc[i] === "/" ||
            toCalc[i] === undefined
        ) {
            prevNum = toParse(lastOperatorPosition, i);
            calc(parseInt(prevNum), parseInt(num), toCalc[lastOperatorPosition]);
            num = prevNum;
            lastOperatorPosition = i;
        }
    }

    function toParse(start, end) {
        let n = "";
        for (let j = start; j < end; j++) {
            n += toCalc[j];
        }
        return parseInt(n);
    }

    function calc(prevNum, num, operator) {
        let n;
        switch (operator) {
            case "+":
                n = prevNum + num;
                break;
            case "-":
                n = prevNum - num;
                break;
            case "*":
                n = prevNum * num;
                break;
            case "/":
                n = prevNum / num;
                break;
        }
        const displayUpdate = document.querySelector("#displayOutput");
        displayUpdate.textContent = n;
    }
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
