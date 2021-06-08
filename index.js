// FORK this starter file and save it to your own Repl.it account.

const input = require('readline-sync');
let lines = "-------------------------------------"
// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = '10:05:34 AM';
//let astronautCount = 7;


let astronautCount = input.question("Enter the number of astronauts: ");
 
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg =	760000 ;
let shuttleMassKg	= 74842.31 ;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let fuelTempCelsius = -225;
let fuelLevel	= '100%'
let weatherStatus = 'clear';
// Write code to generate the LC04 report here:

console.log(lines);
console.log('> LC04 - LAUNCH CHECKLIST');
console.log(lines);
console.log('Date: ' + date);
console.log('Time: ' + time + '\n');
console.log(lines);
console.log("> ASTRONAUT INFO");
console.log(lines)
console.log('* count: ' + astronautCount);
console.log('* status: ' + astronautStatus + '\n');

console.log(lines);
console.log('> FUEL DATA');
console.log(lines);
console.log("* Fuel temp celcius: " + fuelTempCelsius);
console.log("* Fuel level : " + fuelLevel+ '\n');
console.log(lines);
console.log('> MASS DATA');
console.log(lines);
console.log('* Crew mass: ' + crewMassKg + "kg")
console.log('* Fuel mass: ' + fuelMassKg + "kg")
console.log('* Shuttle mass: ' + shuttleMassKg + "kg")
console.log('* Total mass: ' + totalMassKg + "kg"+ '\n')

console.log(lines);
console.log('> FLIGHT PLAN');
console.log(lines);
console.log('* weather: ' + weatherStatus + '\n') 

console.log(lines);
console.log('> OVERALL STATUS');
console.log(lines);
console.log('* Clear for takeoff: YES')

//const input = require('readline-sync');
//let astronautcount = input.question("Enter the number of astronauts");


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.