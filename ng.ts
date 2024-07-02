#! usr/bin/env node

import inquirer from "inquirer"

/* 1 => comp will generate a random no
   2 => user input for guessing no
   3 => compare both numbers and show result */

const randomno = Math.floor( Math.random () *10 + 1 );

const ans = await inquirer.prompt 
([

    {name : "num",
     type : "number",
     message : "Choose a number between 1-10",
    }

]);

if ( ans.num === randomno ) { 
    console.log("Congrats!! You guessed it right.")
}

else {
    console.log("Better luck next time :(")
};