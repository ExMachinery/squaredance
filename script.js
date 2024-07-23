const btn = document.querySelector("#btn");
const alert = document.querySelector(".alert");
const content = document.querySelector(".container");
let userInput;

btn.addEventListener("click", () => {
    const del = document.querySelectorAll(".row");
    del.forEach((item) => {
        content.removeChild(item);
    });

    let userInput = prompt("Enter amount of grid you want. For 0 to 100.");
    if (userInput == null || userInput == "") {
        userInput = 0;
        alert.textContent = "Oh, you want to do nothing...";
    } else if (userInput < 0 || userInput > 100) {
        userInput = 0;
        alert.textContent = "Cant do shit with this values. Instructions unclear, right?";
    } else {
        alert.textContent = "";
    }

    if (userInput > 0 && userInput <= 100) {
        for (let i = 0; i < userInput; i++) {
            const row = document.createElement("div");
            row.classList.toggle("row");
            content.appendChild(row);
            for (let j = 0; j < userInput; j++) {
                const div = document.createElement("div");
                div.classList.toggle("square");
                row.appendChild(div);
            }
        }
        
        const sqrs = content.querySelectorAll(".square");
        
        sqrs.forEach((sqr) => {
            sqr.addEventListener("mouseover", () => {
                sqr.classList.toggle("hovered");
            });
        });
    }
});
    




