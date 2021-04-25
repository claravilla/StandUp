//declaring variables

let daysOfWeek = [];
let squad = [];
let daysOfWeekCounter = 0;

//initialise page
initPage();

//setting event listener for the buttons

document.querySelector(".rota").addEventListener("click", newRota);
document.querySelector(".clear").addEventListener("click", initPage);

//function to set initial variable, clear the tex in the div - also use to reset

function initPage() {
  document.querySelector(".clear").classList.add("hidden");
  document.querySelector(".answer").innerHTML = "";
  // daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  daysOfWeek = [];
  squad = [
    "A La Cart 🛒",
    "Bionicles 👹",
    "Brickoin 💰",
    "Cybots 🦾",
    "Disco 🕺",
    "Dora 🏝️",
    "Guardians 🛡️",
    "Houston 🚀",
    "Mixels 👾",
    "VIPers 🐍",
  ];

  daysOfWeekCounter = 0;
}

// function to generate a day, write the answer in the div and create a new array without the squad selected

function generateDay() {
  console.log(squad.length);

  let newSquad = [];
  console.log(newSquad.length);

  let randomNumber = Math.floor(Math.random() * squad.length); //generate random number
  console.log(randomNumber);

  console.log(daysOfWeek[daysOfWeekCounter] + ": " + squad[randomNumber]);

  document.querySelector(".answer").innerHTML +=
    daysOfWeek[daysOfWeekCounter] + ": " + squad[randomNumber] + "<br>"; // write in the answer div the day in the array that matches the counter + 
                                                                        //squad in the random number position in the array

  for (i = 0; i < squad.length; i++) {
    // create the new squad array with the remaining squad
    if (i !== randomNumber) {
      newSquad.push(squad[i]);
    }
  }

  console.log(newSquad);

  squad = newSquad; // set the squad array to the new value which doesnt have the squad already selected
  console.log("this is the new array " + squad);

  daysOfWeekCounter = daysOfWeekCounter + 1; //increase the day counter of 1 so next time this run, the new squad is assigned to the following day

  console.log(daysOfWeekCounter);
}

//function to generate a new rota starting on the selected day

function newRota() {

let startingDay = document.getElementById("day").value; //getting the value from the drop down menu
let rotaLength = document.getElementById("length").value; //getting the value from the drop down menu
console.log(startingDay);
console.log(rotaLength);

//set daysOfWeek value according to the starting day selected

switch (startingDay) {
  case "mon":
    daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ];
    break;
  case "tue":
    daysOfWeek = [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Monday"

    ];
    break;
  case "wed":
    daysOfWeek = [
      "Wednesday",
      "Thursday",
      "Friday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Monday",
      "Tuesday"
    ];
    break;
  case "thu":
    daysOfWeek = [
      "Thursday",
      "Friday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Monday",
      "Tuesday",
      "Wednesday"
    ];
    break;
  case "fri":
    daysOfWeek = [
      "Friday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ];
    break;
  default:
    daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ];
}

generateRota (daysOfWeek,rotaLength);  //call the generateRota function with the day of the week and length we want
};

//function to generate a X days rota and display the clear button

function generateRota(day, length) {
  for (d = 0; d < length; d++) {
    generateDay();
  }
  document.querySelector(".clear").classList.remove("hidden");
}



/*if i want to ask also for the lenght
    - create a drop down menu for it or free text
    - get element by id and set a variable to that value
    -pass the value to the generate Rota and run the day rota only that number of time


    */