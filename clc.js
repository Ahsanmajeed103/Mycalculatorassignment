import inquirer from "inquirer";
//Asking Questions from users through inquirer
let answers = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "SecondNumber" },
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement if/else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.SecondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.SecondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.SecondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.SecondNumber);
}
else {
    console.log("Invalid input");
}
