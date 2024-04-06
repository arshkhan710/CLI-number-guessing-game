#! /usr/bin/env node
import inquirer from "inquirer";
//1. Computer will Generate Random Number //Done
//2. User input for guessing number //Done
//3. compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1); //Math.random it will generate random number
let condition = true;
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number Between 1-10",
    },
]);
if (answers.UserGuessedNumber === randomNumber) {
    console.log(`Congratulations! You guessed Right Number`);
}
else {
    console.log(`You guessed Wrong number!`);
    console.log(`Write Number Was ${randomNumber}`);
}
;
