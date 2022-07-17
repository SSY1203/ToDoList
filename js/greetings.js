const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN);

    const username = loginInput.value;
    localStorage.setItem(USERNAME, username);

    greetingLogin(username);
}

const toDoForm2 = document.getElementById("todo-form");
const toDoList2 = document.getElementById("todo-list");

function greetingLogin(name){
    greeting.innerText = `Hello, ${name}!`;
    greeting.classList.remove(HIDDEN);
    toDoForm2.classList.remove(HIDDEN);
    toDoList2.classList.remove(HIDDEN);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greetingLogin(savedUsername);
}

