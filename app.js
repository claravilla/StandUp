//declaring variables

let daysOfWeek = [];
let squad = [];
let daysOfWeekCounter = 0;

//initialise page
initPage();

//setting event listener for the buttons

document.querySelector(".rota").addEventListener("click", generateRota);
document.querySelector(".clear").addEventListener("click", initPage);

//function to set initial variable, clear the tex in the div - also use to reset 

function initPage() {
  document.querySelector(".clear").classList.add("hidden");
  document.querySelector(".answer").innerHTML = "";
  daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  squad = [
    "A La Cart",
    "Bionicles",
    "Brickoin",
    "Cybots",
    "Disco",
    "Dora",
    "Guardians",
    "Houston",
    "Mixels",
    "VIPers",
  ];

  daysOfWeekCounter = 0;

}



// function to generate a day, write the answer in the div and create a new array without the squad selected

function generateDay() {
  console.log(squad.length);

  let newSquad = [];
  console.log(newSquad.length);

  let randomNumber = Math.floor(Math.random() * squad.length);
  console.log(randomNumber);

  console.log(daysOfWeek[daysOfWeekCounter] + ": " + squad[randomNumber]);

  document.querySelector(".answer").innerHTML +=
    daysOfWeek[daysOfWeekCounter] + ": " + squad[randomNumber] + "<br>";

  for (i = 0; i < squad.length; i++) {
    if (i !== randomNumber) {
      newSquad.push(squad[i]);
    }
  }

  console.log(newSquad);

  squad = newSquad;
  console.log("this is the new array " + squad);

  daysOfWeekCounter = daysOfWeekCounter + 1;

  console.log(daysOfWeekCounter);
}

//function to generate a 5 days rota and display the clear button

function generateRota() {
  for (d = 0; d <= 4; d++) {
    generateDay();
  }
  document.querySelector(".clear").classList.remove("hidden");
}

