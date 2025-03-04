const boardContainer = document.querySelector("#boardContainer");
const addBoardButton = document.querySelector("#addBoardButton");
const submitButton = document.querySelector("#submitButton");


// creating deleteItem function
const deleteItems = (e) => {
    e.target.parentElement.parentElement.parentElement.firstElementChild.lastChild.innerText = `${e.target.parentElement.parentElement.children.length - 1}`;
    e.target.parentElement.remove();
}

// create item
const createItem = (e) => {
    const userTask = prompt("Write your task...");
    
    // creating board-item div
    const boardItem = document.createElement("div");
    boardItem.classList.add("board-item");
    boardItem.setAttribute("draggable", true);

    boardItem.addEventListener("dragstart", () => {
        boardItem.classList.add("flying");
    });

    boardItem.addEventListener("dragend", () => {
        boardItem.classList.remove("flying");
    })

    // creating show board-item creation time para
    let timer = new Date();
    const showBoardItemCreationTime = document.createElement("p");
    showBoardItemCreationTime.classList.add("board-item-creation-time");
    showBoardItemCreationTime.innerText = `${timer.toLocaleString()}`;
    boardItem.appendChild(showBoardItemCreationTime);

    // creating board-item para
    const boardItemPara = document.createElement("p");
    boardItemPara.innerText = `${userTask}`;
    boardItem.appendChild(boardItemPara);
    
    // creating board-item button for delete
    const boardItemDeleteBtn = document.createElement("button");
    boardItemDeleteBtn.classList.add("delete-item-button");
    boardItemDeleteBtn.innerText = "Delete";
    boardItem.appendChild(boardItemDeleteBtn);
    boardItemDeleteBtn.addEventListener("click", deleteItems)
    
    if (e.target.parentElement.children[0].id === "plusIcon") {
        e.target.parentElement.children[0].parentElement.parentElement.children[2].appendChild(boardItem);
        e.target.parentElement.children[0].parentElement.parentElement.firstChild.lastChild.innerText = `${e.target.parentElement.children[0].parentElement.parentElement.children[2].children.length}`;
    }
    
    else if (e.target.parentElement.children[2].className === "board-item-container") {
        e.target.parentElement.children[2].appendChild(boardItem);
        e.target.parentElement.children[0].parentElement.firstChild.lastChild.innerText = `${e.target.parentElement.children[0].parentElement.children[2].children.length}`;
    }
    
}

// create boards
const createBoards = () => {
    // store name, color and description
    const name =document.querySelector("#name");
    const description =document.querySelector("#description");
    
    // creating board div
    const board = document.createElement("div");
    board.classList.add("board");

    // creating about board div
    const boardHeading = document.createElement('div');
    boardHeading.classList.add("board-headings");

    // creating boardColorPicker div
    const boardColorPicker = document.createElement("div");
    boardColorPicker.classList.add("board-color-picker");
    boardHeading.appendChild(boardColorPicker);

    // creating boardName div
    const boardName = document.createElement('div');
    boardName.classList.add("board-name");
    boardName.innerText = `${name.value}`;
    boardHeading.appendChild(boardName);

    // creating totalItems div
    const totalItems = document.createElement("div");
    totalItems.classList.add("total-items");
    totalItems.innerText = 0;
    boardHeading.appendChild(totalItems);

    // creating boardDescription div
    const boardDescription = document.createElement("p");
    boardDescription.classList.add("board-description")
    boardDescription.innerText = `${description.value}`;

    // creating board-item-container div
    const boardItemContainer = document.createElement("div");
    boardItemContainer.classList.add("board-item-container");

    // creating add item button
    const addItemButton = document.createElement("button");
    addItemButton.classList.add("add-item-button");
    addItemButton.innerHTML = `<span id="plusIcon">+</span> Add item`;
    addItemButton.addEventListener("click", createItem)

    // appending boardHeading, boardDescription, addItemButton  and boardItemContainer in board container
    board.appendChild(boardHeading);
    board.appendChild(boardDescription);
    board.appendChild(boardItemContainer)
    board.appendChild(addItemButton);

    // appending board in boards container
    boardContainer.appendChild(board);

    const popupCard = document.querySelector("#popupCard");
    popupCard.classList.remove("active");
    boardContainer.classList.remove("blur");

    name.value = "";
    description.value = "";

    // board over
    const allBoardItemContainer = document.querySelectorAll(".board-item-container");
    allBoardItemContainer.forEach( (boardItemContainer) => {
        boardItemContainer.addEventListener("dragover", () => {
            boardItemContainer.appendChild(document.querySelector(".flying"))
        })
    })

}

// show popupCard
const showPopupCard = () => {
    const popupCard = document.querySelector("#popupCard");
    popupCard.classList.add("active");
    boardContainer.classList.add("blur");
}

addBoardButton.addEventListener("click", showPopupCard);
submitButton.addEventListener("click", createBoards);