#! /usr/bin/env node
import inquirer from "inquirer";
let questions = await inquirer.prompt([
    {
        name: "question1",
        type: "number",
        message: "enter the first number:",
    },
    {
        name: "question2",
        type: "number",
        message: "enter the second number:",
    },
]);
let operator = await inquirer.prompt([
    {
        name: "operator",
        type: "list",
        message: "select the operator:",
        choices: ["+", "-", "*", "/"]
    }
]);
if (operator.operator === "+") {
    console.log(parseInt(questions.question1) + (parseInt(questions.question2)));
}
else if (operator.operator === "-") {
    console.log(parseInt(questions.question1) - (parseInt(questions.question2)));
}
else if (operator.operator === "*") {
    console.log(parseInt(questions.question1) * (parseInt(questions.question2)));
}
else if (operator.operator === "/") {
    console.log(parseInt(questions.question1) / (parseInt(questions.question2)));
}
