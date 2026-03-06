let addBtn = document.querySelector("#addBtn");
let taskText = document.querySelector('input');
let list = document.querySelector(".taskList")

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let text = taskText.value;

    if(text === ""){
        return;
    }
    let span = document.createElement("span");
    span.classList.add("addedTask");

    let taskDiv = document.createElement("div");
    taskDiv.textContent = text;
    taskDiv.classList.add("para");

    let btnDiv = document.createElement("div");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    let doneButton = document.createElement("button");
    doneButton.textContent = "Done";

    btnDiv.classList.add("btn");
    deleteButton.classList.add("deleteBtn");
    doneButton.classList.add("doneBtn");

    btnDiv.append(deleteButton, doneButton);
    span.append(taskDiv,btnDiv);
    list.append(span);

    taskText.value = "";

    deleteButton.addEventListener("click", () => {
        span.remove();
    });
    doneButton.addEventListener("click", () => {
        taskDiv.style.textDecoration = "line-through";
        taskDiv.style.opacity = "0.3";
    });
});