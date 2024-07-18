const btn = document.querySelector("#btn");
const alert = document.querySelector(".alert");
let userInput;
// let textAlert;

btn.addEventListener("click", () => {
    let userInput = prompt("Enter amount of grid you want. For 0 to 100.");
    if (userInput == null || userInput == "") {
        userInput = 0;
        alert.textContent = "Oh, you want to do nothing...";
        // return textAlert = "Oh, you want to do nothing...";
    } else if (userInput < 0 || userInput > 100) {
        userInput = 0;
        alert.textContent = "Cant do shit with this values. Instructions unclear, right?";
        // return textAlert = "Cant do shit with this values. Instructions unclear, right?";
    } else {
        alert.textContent = "";
        return userInput;
    }
})