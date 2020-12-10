let title = document.querySelector("h1");

title.textContent = "Calculate a Factorial";

let form = document.querySelector("form");
let dataToAnalize;
let resultOfData;
let result = document.querySelector("#result");

function submitForm(e) {
    e.preventDefault();

    dataToAnalize = document.querySelector("#text-to-analize").value;
    
    resultOfData = dataToAnalize

    for (let i = resultOfData - 1; i > 0; i--) {
        resultOfData *= i;
    }

    result.textContent = "The factorial of " + dataToAnalize + " is " + resultOfData;
}

form.addEventListener("submit", submitForm);





