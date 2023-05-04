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
        let res = calculate(displayUpdate.textContent);
        if (res % 1 === 0) {
            result.textContent = res;
        } else {
            result.textContent = parseFloat(res.toFixed(5));
        }
    } else if (e.target.value === "←") {
        displayUpdate.textContent = displayUpdate.textContent.slice(0, -1);
    } else if (e.target.value === "C") {
        displayUpdate.textContent = "";
        result.textContent = "";
    } else if (
        e.target.value === "+" ||
        e.target.value === "-" ||
        e.target.value === "*" ||
        e.target.value === "/"
    ) {
        if (
            displayUpdate.textContent[displayUpdate.textContent.length - 1] !==
                "+" &&
            displayUpdate.textContent[displayUpdate.textContent.length - 1] !==
                "-" &&
            displayUpdate.textContent[displayUpdate.textContent.length - 1] !==
                "*" &&
            displayUpdate.textContent[displayUpdate.textContent.length - 1] !==
                "/"
        ) {
            displayUpdate.textContent += e.target.value;
        }
    } else {
        displayUpdate.textContent += e.target.value;
    }
});

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
document.addEventListener("keydown", (e) => {
    if (e.key === "1") {
        one.click();
    }
    if (e.key === "2") {
        two.click();
    }
    if (e.key === "3") {
        three.click();
    }
    if (e.key === "4") {
        four.click();
    }
    if (e.key === "5") {
        five.click();
    }
    if (e.key === "6") {
        six.click();
    }
    if (e.key === "7") {
        seven.click();
    }
    if (e.key === "8") {
        eight.click();
    }
    if (e.key === "9") {
        nine.click();
    }
    if (e.key === "0") {
        zero.click();
    }
    if (e.key === "+" || e.key === "=") {
        addition.click();
    }
    if (e.key === "-") {
        subtraction.click();
    }
    if (e.key === "*") {
        multiplication.click();
    }
    if (e.key === "/") {
        e.preventDefault();
        division.click();
    }
    if (e.key === "Enter") {
        equals.click();
    }
    if (e.key === "Backspace") {
        backspace.click();
    }
    if (e.key === "c") {
        clear.click();
    }
});
