//Watched video "How To Create To-Do List App Using HTML CSS And JavaScript | Task App In JavaScript" by GreatStack

/*const inputBox = document.getElementById("input-box");
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
*/

//stores exercises
let exercisesData = {};

//add new wokrout day with dropwdown for the exercises
function addNewDay() {
    const newDayName = document.getElementById('newDay').value;
    if (newDayName.trim() === "") {
        alert("Please enter a valid name for the new day.");
        return;
    }
    const dayContainer = document.getElementById('dayContainer');
    if (dayContainer.style.display === "none") {
        dayContainer.style.display = "block";
    }
    const daysSelect = document.getElementById('days');
    const newOption = document.createElement('option');
    newOption.value = newDayName;
    newOption.textContent = newDayName;
    daysSelect.appendChild(newOption);
    exercisesData[newDayName] = [];
}

// makes exercises visible after selecting that day
function displayExercises(){
    const selectedDay = document.getElementById('days').value;
    const exerciseContainer = document.getElementById('exercise-container');
    const selectedDayElement = document.getElementById('selected-day');
    const exerciseList = document.getElementById('exercise-list');
    if (selectedDay) {
        exerciseContainer.style.display = "block";
        selectedDayElement.textContent = selectedDay;
        exerciseList.innerHTML = '';
        exercisesData[selectedDay].forEach((exercise, index) => {
            const listItem = document.createElement('li');
            //I have no idea what this does
            listItem.innerHTML = `
                ${exercise.name} | Reps: <span class="reps">${exercise.reps}</span> | Weight: <span class="weight">${exercise.weight}</span>
                <button onclick="editExercise(${index}, '${selectedDay}')">Edit</button>
            `;
            exerciseList.appendChild(listItem);
        });
    } else {
        exerciseContainer.style.display = "none";
    }
}

//adds exercise for selected day
function addExercise(){
    const selectedDay = document.getElementById('days').value;
    const exerciseName = document.getElementById('newExercise').value;
    const reps = document.getElementById('newReps').value.trim();
    const weight = document.getElementById('newWeight').value.trim();
    if (!exerciseName || !reps || !weight) {
        alert("Please fill in all fields (exercise name, reps, and weight).");
        return;
    }
    exercisesData[selectedDay].push({
        name: exerciseName,
        reps: reps,
        weight: weight
    });
    displayExercises();
    document.getElementById('newExercise').value = '';
    document.getElementById('newReps').value = '';
    document.getElementById('newWeight').value = '';
}

//edit exercises
function editExercise(index, selectedDay) {
    const exercise = exercisesData[selectedDay][index];
    document.getElementById('newExercise').value = exercise.name;
    document.getElementById('newReps').value = exercise.reps;
    document.getElementById('newWeight').value = exercise.weight;
}





function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showWorkouts(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showWorkouts();
