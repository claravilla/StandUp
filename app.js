document.querySelector("button").addEventListener("click", generateRota);


let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let squad = [
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

let daysOfWeekCounter = 0;

function generateDay() {
  console.log(squad.length);

  let newSquad = [];
  console.log(newSquad.length);

  let randomNumber = Math.floor(Math.random() * squad.length);
  console.log(randomNumber);

  console.log(daysOfWeek[daysOfWeekCounter] + ": " + squad[randomNumber]);

 document.querySelector(".answer").innerHTML +=  daysOfWeek[daysOfWeekCounter] + ": " + squad[randomNumber]+"<br>";



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

function generateRota() {
  for (d = 0; d <= 4; d++) {
    generateDay();
  }
}
