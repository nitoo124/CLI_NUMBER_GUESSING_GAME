#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// computer guessing num
let system_num : number = Math.floor(Math.random() * 10 + 1);
//console.log(system_num)

let user_guess_num = await inquirer.prompt({
    type : 'number',
    name : 'userguess',
    message : 'Guess any number between 1 to 10?'
});

console.log(chalk.blueBright(`Your guessed number is ${user_guess_num.userguess} but, Correct number is ${system_num}.`));


if (system_num === user_guess_num.userguess) {

    console.log(chalk.greenBright(`congratulations you win!`));
    
}else{

    console.log(chalk.red('better luck next time'));
};