import chalk from "chalk";
import inquirer from "inquirer";

class player {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name
    };
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
};

class opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
};




let player1 = await inquirer.prompt(
    [
        {
            name: "player",
            type: "input",
            message: "Enter Your Name: "
        }
    ]
);
console.log(chalk.bgYellow.whiteBright(`\n Hello "${player1.player}"! we are glad to see you in this game \n`));

// **************************************************************************************************************//

let opponent1 = await inquirer.prompt(
    [
        {
            name: "opponent",
            type: "list",
            message: "Select your opponent to war with him: ",
            choices: ['Batsmen', 'Spidermen', 'Hulk']
        }
    ]
);
console.log(chalk.bgYellow.whiteBright(`\n You Select "${opponent1.opponent}" as an opponent to fighting \n`));


let p1 = new player(player1.player);
let o1 = new opponent(opponent1.opponent)



do {

    // FOR BATS-MEN
    if (opponent1.opponent === 'Batsmen') {
        let ask = await inquirer.prompt(
            [
                {
                    name: "opponent",
                    type: "list",
                    message: "What would you like to do: ",
                    choices: ['Attack', 'Increase Fuel', 'Run for your life']
                }
            ]
        );
        if (ask.opponent === 'Attack') {
            let randomNum = Math.floor(Math.random() * 2)
            if (randomNum > 0) {
                p1.fuelDecrease()
                console.log(chalk.bgGreen.white(`\n "${p1.name}" Fuel is "${p1.fuel}"`));
                console.log(chalk.bgGreen.white(`"${o1.name}" Fuel is "${o1.fuel}" \n`));
                if (p1.fuel <= 0){
                    console.log(chalk.bgBlue.white(`\n Game Over "${player1.player}"! Better Luck Next Time.... \n Thank You for playing`));
                    process.exit()                    
                }
            }
            if (randomNum <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bgGreen.white(`\n ${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bgGreen.white(`${o1.name} fuel is ${o1.fuel} \n`));
                if(o1.fuel <= 0){
                    console.log(chalk.bgBlue.white(`\n Congratulations "${player1.player}"! You are winner.... \n Thank You for playing \n`));
                    process.exit()                    
                }
            }
        }
        if (ask.opponent === 'Increase Fuel') {
            p1.fuelIncrease()
            console.log(chalk.bgMagenta.white(`\n You succesfully drink the "ENERGY BOOSTER", Now your strength is "${p1.fuel}" \n`));
        }
        if (ask.opponent === 'Run for your life') {
            console.log(chalk.bgRed.white("\n You Quit this game! Better Luck Next Time, \n Thank You For Choosing us"));
            process.exit()
        }
    }





    
    // FOR SPIDER-MEN
    if (opponent1.opponent === 'Spidermen') {
        let ask = await inquirer.prompt(
            [
                {
                    name: "opponent",
                    type: "list",
                    message: "What would you like to do: ",
                    choices: ['Attack', 'Increase Fuel', 'Run for your life']
                }
            ]
        );
        if (ask.opponent === 'Attack') {
            let randomNum = Math.floor(Math.random() * 2)
            if (randomNum > 0) {
                p1.fuelDecrease()
                console.log(chalk.bgGreen.white(`\n "${p1.name}" Fuel is "${p1.fuel}"`));
                console.log(chalk.bgGreen.white(`"${o1.name}" Fuel is "${o1.fuel}" \n`));
                if (p1.fuel <= 0){
                    console.log(chalk.bgBlue.white(`\n Game Over "${player1.player}"! Better Luck Next Time.... \n Thank You for playing`));
                    process.exit()                    
                }
            }
            if (randomNum <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bgGreen.white(`\n ${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bgGreen.white(`${o1.name} fuel is ${o1.fuel} \n`));
                if(o1.fuel <= 0){
                    console.log(chalk.bgBlue.white(`\n Congratulations "${player1.player}"! You are winner.... \n Thank You for playing \n`));
                    process.exit()                    
                }
            }
        }
        if (ask.opponent === 'Increase Fuel') {
            p1.fuelIncrease()
            console.log(chalk.bgMagenta.white(`\n You succesfully drink the "ENERGY BOOSTER", Now your strength is "${p1.fuel}" \n`));
        }
        if (ask.opponent === 'Run for your life') {
            console.log(chalk.bgRed.white("\n You Quit this game! Better Luck Next Time, \n Thank You For Choosing us"));
            process.exit()
        }
    }




    // FOR HULK
    if (opponent1.opponent === 'Hulk') {
        let ask = await inquirer.prompt(
            [
                {
                    name: "opponent",
                    type: "list",
                    message: "What would you like to do: ",
                    choices: ['Attack', 'Increase Fuel', 'Run for your life']
                }
            ]
        );
        if (ask.opponent === 'Attack') {
            let randomNum = Math.floor(Math.random() * 2)
            if (randomNum > 0) {
                p1.fuelDecrease()
                console.log(chalk.bgGreen.white(`\n "${p1.name}" Fuel is "${p1.fuel}"`));
                console.log(chalk.bgGreen.white(`"${o1.name}" Fuel is "${o1.fuel}" \n`));
                if (p1.fuel <= 0){
                    console.log(chalk.bgBlue.white(`\n Game Over "${player1.player}"! Better Luck Next Time.... \n Thank You for playing`));
                    process.exit()                    
                }
            }
            if (randomNum <= 0) {
                o1.fuelDecrease()
                console.log(chalk.bgGreen.white(`\n ${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bgGreen.white(`${o1.name} fuel is ${o1.fuel} \n`));
                if(o1.fuel <= 0){
                    console.log(chalk.bgBlue.white(`\n Congratulations "${player1.player}"! You are winner.... \n Thank You for playing \n`));
                    process.exit()                    
                }
            }
        }
        if (ask.opponent === 'Increase Fuel') {
            p1.fuelIncrease()
            console.log(chalk.bgMagenta.white(`\n You succesfully drink the "ENERGY BOOSTER", Now your strength is "${p1.fuel}" \n`));
        }
        if (ask.opponent === 'Run for your life') {
            console.log(chalk.bgRed.white("\n You Quit this game! Better Luck Next Time, \n Thank You For Choosing us"));
            process.exit()
        }
    }


}
while (true)