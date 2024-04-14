import inquirer from "inquirer";
let myBalance = 10000;
const pinCode = 1234;
let pinEntered = await inquirer.prompt({
    name: "pin",
    message: "Enter Pin Code",
    type: "number",
});
if (pinEntered.pin === pinCode) {
    console.log("Correct Pin Code!!");
    let atmMethods = await inquirer.prompt({
        name: "method",
        message: "Select an method of withdrawal",
        type: "list",
        choices: ["Cash Withdraw", "Fast Cash"]
    });
    if (atmMethods.method === "Cash Withdraw") {
        let cashAmount = await inquirer.prompt({
            name: "withdrawal",
            message: "Enter amount you want to withdraw",
            type: "number",
        });
        if (myBalance >= cashAmount.withdrawal) {
            myBalance -= cashAmount.withdrawal;
            console.log(`Your remaining balace is: ${myBalance}`);
        }
        else {
            console.log("Sorry!!! Insufficient Balance.");
        }
    }
    ;
    if (atmMethods.method === "Fast Cash") {
        let fastAmount = await inquirer.prompt({
            name: "fastCash",
            message: "Please select price you want to withdraw",
            type: "list",
            choices: ["500", "1000", "2000", "5000", "15000"]
        });
        if (myBalance >= fastAmount.fastCash) {
            myBalance -= fastAmount.fastCash;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
        else {
            console.log("Sorry! Insufficient Balance.");
        }
    }
}
else {
    console.log("Incorrect Pin Code!!!");
}
;
