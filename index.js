#! /usr/bin/env/ node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: 'pinCode',
    type: "number",
    message: "Please enter your pin:",
});
if (pinAnswer.pinCode === myPin) {
    console.log("Correct Pin Code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select An Option",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter Amount",
                type: "number",
            }
        ]);
        myBalance -= amountAns.Amount;
        console.log("Your Remaining Balnce is: " + myBalance);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your Balance is: " + myBalance);
    }
}
else {
    console.log("Please enter correct pin code.");
}
