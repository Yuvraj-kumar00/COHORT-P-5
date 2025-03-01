const createButtons = document.querySelector("#createButtons");
const colorName = document.querySelector("#colorBox");
const buttonContainer = document.querySelector("#buttonContainer");

const changeBodyBgColor = (e) => {
    const body = document.querySelector("body");
    body.style.backgroundColor = `${e.target.innerText}`
}

const createMultipleButtons = () => {
    const button = document.createElement("button");
    button.innerText = colorName.value;
    button.style.backgroundColor = `${colorName.value}`
    button.classList.add("new-buttons");
    button.addEventListener("click", changeBodyBgColor)

    buttonContainer.appendChild(button);
    colorName.value = "";
}

createButtons.addEventListener("click", createMultipleButtons);