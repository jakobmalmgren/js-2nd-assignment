// // BANK ACCOUNT

// // Start by creating the object and the properties. You can leave the functions empty for now if you want.
// // You'll find all the information about what properties the object should have in the readme file.

// // In the deposit and withdrawal function use this code to show the prompt
// parseFloat(prompt("Put some proper message here"));
// // You need to change the message of course. You should also do some research why parseFloat() is used here
// // answer by making a comment in the code.
// // Be aware of that you need to add some code to this so you can display the actual input.

// // In the deposit and withdrawal function you also need to handle som potential errors.
// // To handle one of the potential error you can use this piece of code
// isNaN(variableName);
// // you need to change the variableName to your actual variable.
// // you also need to check some other conditions here and use a logical operator.
// // try to say the sentece out loud or think it:
// // "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// // Do you know what operator you should use?

// // In the accountError and accountExit function you can use this to show a message to the user:
// alert("your code here and maybe properties");
// // of course you need to put a proper message and you might need to display some of the properties.

// // STARTER FUNCTION
// function atm() {
//   let choice = parseInt(prompt("Display menu choices here"));
//   //prompt user for choice.

//   // you can use the variable choice for your switch or if/else statement
//   // so choice will hold the value of the user input.
// }

let deposit = 0;

let withdrawal = 0;

const account = {
  accountName: "jakob malmgren",
  balance: 100,
  getBalance: function () {},

  deposit: function () {
    this.balance = this.balance + Number(deposit);
    alert(`Your new balance is ${this.balance}`);
    atm();
  },

  withdrawal: function () {
    this.balance = this.balance - withdrawal;
    alert(`Your new balance is ${this.balance}`);

    atm();
  },

  getAccountName: function () {
    alert(`Name of account: ${this.accountName}`);
  },

  accountError: function () {
    alert(
      `You have not enough of money, your accountbalance is ${this.balance}`
    );
    atm();
  },

  exitAccount: function () {
    alert("You selected Exit,Thank you for your time");
    window.close();
  },
};

function atm() {
  let choice = parseInt(
    prompt(
      "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get accountname 5.) Exit "
    )
  );

  if (choice === 1) {
    alert(`Your current balance is: ${account.balance}`);
    atm();
  } else if (choice === 2) {
    deposit = prompt("How much would you like to deposit?");
    account.deposit();
  } else if (choice === 3) {
    withdrawal = prompt("How much do you want to withdrawal?");
    if (account.balance >= withdrawal) {
      account.withdrawal();
    } else account.accountError();
  } else if (choice === 4) {
    account.getAccountName();
    atm();
  } else if (choice === 5) {
    account.exitAccount();
  } else if (choice > 5) {
    alert("this service is not available!");
    atm();
  }
}

atm();

// i used if/else becuse im more familair with this i guess, is it right or wrong if u use the one or the
// other?

// parseFloat(prompt("Put some proper message here")); WHY SHOULD I USE THAT??
// The parseFloat() method parses a value as a string and returns the first number. i googled that but why
// do i need that?

// // In the deposit and withdrawal function you also need to handle som potential errors.
// // To handle one of the potential error you can use this piece of code
// isNaN(variableName); IS THIS CODE FOR SO U CANT TEXT LIKE LETTERS ETC?

// i almost did all, but think its to messy and sometimes i dont know where to put whtat
// maybe i shouldnt have prompt in the atm(); or the most of the else if and just let them be in the functions?..
