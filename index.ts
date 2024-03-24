#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer will generate a number
// 2) User input for guessing number
// 3) Compare user input with computer generated input and show result

const randomNumber = Math.floor(Math.random() * 10 + 1 );

const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);

console.log(answer);

if(answer.userGussedNumber === randomNumber){
    console.log("Hurray! You guessed it right.")
}else{
    console.log("Opps! Wrong number.")
}
