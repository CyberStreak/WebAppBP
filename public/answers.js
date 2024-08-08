const radioButtons = document.querySelectorAll('input[name="things"]')
const answer = document.querySelector("#output");

for (const rb of radioButtons) {
    rb.addEventListener("change", evaluation);
}

function evaluation(event) {
    console.log(event);

    if (event.target.value === "wrong") {
        answer.textContent = "Diese Antwort ist leider falsch.";
        answer.style.backgroundColor = "red";
        answer.style.border = "1px solid black";
    } else if (event.target.value === "right") {
        answer.textContent = "Das ist die richtige Antwort";
        answer.style.backgroundColor = "green";
        answer.style.border = "1px solid black";
    }
}