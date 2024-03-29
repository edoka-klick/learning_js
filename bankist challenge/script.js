'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (move, index) {
    const type = move > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${index + 1}-${type}</div>
      <div class="movements__value">${move}€</div>
    </div>
    `
    ///insertAdjacentHTML = adds a string html code on html file, afterbegin - it adds a child element above the old one, search other options on mdn mozilla js
    containerMovements.insertAdjacentHTML('afterbegin', html);

  })
}



const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${acc.balance}€`;
};


const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interes = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate)/100)
    .filter((int, i, arr) => {
        return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interes}€`;
}



const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (char) {
        return char[0]; ///This will return an array of first char of each word
      })
      .join(''); //This will join the array into a string
  })
}

createUsernames(accounts);

const updateUI = function(accnt){
  displayMovements(accnt.movements);
  calcDisplayBalance(accnt);
  calcDisplaySummary(accnt);
} 


///Event handlers

let currentAccount;

/*
It handles the login button, it will search for the username and if the pass is correct then it will log that user in
*/
btnLogin.addEventListener('click', function(e){
  //Prevent the form from submitting
  e.preventDefault();
  //console.log(e);
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);
  if(currentAccount?.pin === Number(inputLoginPin.value)){
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    
    ///After login: the content will take the user details, but the login div will be emptied
    inputLoginUsername.value = inputLoginPin.value = "";

    inputLoginPin.blur();

    updateUI(currentAccount);
  }

});
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find((acc) => acc.username === inputTransferTo.value);

  console.log(amount, receiverAcc);
  //update the user itself balance and the transfer to
  if(
    amount > 0 && 
    currentAccount.balance >= amount && 
    receiverAcc?.username !== currentAccount.username
    ){
      ///updating both user and receiver
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      updateUI(currentAccount);
    }
    inputTransferAmount.value = "";
    inputTransferTo.value = "";

})

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  
  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    //console.log(index);
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  };
  
  inputLoginUsername.value = inputLoginPin.value = "";
})

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    ///Add movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputLoanAmount.value = "";
});

let sorted = false;

btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

