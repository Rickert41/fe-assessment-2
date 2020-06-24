// global scope met de form elementen
let textArea = document.getElementById("text"); // select de textarea
let allInputs = document.getElementById("form").querySelectorAll("[required]"); // array met alle required form items
const formButton = document.getElementById("submit");
formButton.addEventListener("click", checkForm); // bij een click op de btton word deze functie aangeroepen
textArea.addEventListener("input", calculateLength); // bij elke input word deze functie aangeroepen


// Functie wordt aangeroepen door de verzend button
function checkForm() {
    for (i = 0; i < allInputs.length; i++) { // For loop die over alle required velden gaat 
        let validityState = allInputs[i].validity; // checkt per item of er iets is ingevuld
        let showAlert = true; // local scope
        if (validityState.valueMissing == true && showAlert == true) { // als er 1 item niet is ingevuld
            showAlert = false; // 1x de error laten zien
            window.alert("Vul alle velden in aub");
            return showAlert; // returned false om spam te voorkomen
        }
    }
}

function calculateLength() {
    const maxLength = textArea.getAttribute("maxlength"); // max length van de textarea
    let current = textArea.value.length; // local scope
    let letterNumber = document.querySelector(".textleft");
    let charactersLeft = maxLength - current; // berekening hoeveel characters er over zijn
    letterNumber.innerHTML = charactersLeft; // veranderd het getal in de html
}
