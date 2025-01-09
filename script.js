//Watched video "How To Create To-Do List App Using HTML CSS And JavaScript | Task App In JavaScript" by GreatStack

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dropDownBtn = document.querySelector(".dropdown__button");
const dropDownMenu = document.querySelector(".dropdown__menu");

function addWorkout(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parantElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showWorkouts(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showWorkouts();

dropDownBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle("hide");
});

