const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDo = [];

function saveToDo(){
    localStorage.setItem("todo", JSON.stringify(toDo));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();

    toDo = toDo.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDo();
}

function postToDo(toDoObj){
    const li = document.createElement("li");
    li.id = toDoObj.id;

    const span = document.createElement("span");
    span.innerText = toDoObj.text;

    const button = document.createElement("button");
    button.innerText = "✓";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function toDoSubmit(event){
    event.preventDefault();

    const input = toDoInput.value;
    toDoInput.value = "";

    const inputObj = {
        text: input,
        id:Date.now()
    };

    toDo.push(inputObj);
    postToDo(inputObj);
    saveToDo();
}

toDoForm.addEventListener("submit", toDoSubmit);


const savedToDo = localStorage.getItem("todo");

if(savedToDo){
    const parsedToDo = JSON.parse(savedToDo);

    toDo = parsedToDo;
    parsedToDo.forEach(postToDo);
}