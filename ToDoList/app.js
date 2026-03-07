let addBtn = document.querySelector("#addBtn");
let taskText = document.querySelector('input');
let list = document.querySelector(".taskList");

list.innerHTML = localStorage.getItem("tasks" || "");

function saveTasks(){
    localStorage.setItem("tasks", list.innerHTML);
}

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

    saveTasks();

    taskText.value = "";

    // deleteButton.addEventListener("click", () => {
    //     span.remove();
    //     saveTasks();
    // });
    // doneButton.addEventListener("click", () => {
    //     taskDiv.style.textDecoration = "line-through";
    //     taskDiv.style.opacity = "0.3";
    //     saveTasks();
    // });

});

list.addEventListener("click", (e) => {

    if(e.target.classList.contains("deleteBtn")){
        e.target.parentElement.parentElement.remove();
        saveTasks();
    }

    if(e.target.classList.contains("doneBtn")){
        let taskDiv = e.target.parentElement.previousElementSibling;
        taskDiv.style.textDecoration = "line-through";
        taskDiv.style.opacity = "0.3";
        saveTasks();
    }

});