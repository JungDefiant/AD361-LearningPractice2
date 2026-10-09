// Program requirements:
// - A user can withdraw funds.
// - A user can deposit funds.
// - A user's balance should never become negative.
// - A PIN must be provided during every action.

let BALANCE = 15983;

const USER_PIN = 1234;

// Deposits money into a user's account.
export function deposit(pin: number, amount: number) {
  if (pin === USER_PIN) {
    BALANCE = BALANCE + amount;
    console.log(BALANCE);
    return BALANCE;
  } else {
    console.log("Incorrect PIN");
  }
}

// Withdraws money from a user's account.
export function withdrawal(pin: number, amount: number) {
  if (pin === USER_PIN) {
      if ((BALANCE - amount) >= 0) {
          BALANCE = BALANCE - amount;
          console.log(BALANCE);
        return BALANCE;
      }
    else {
        console.log("Insuffiencent Balance");
    }

  } else {
    console.log("Incorrect PIN");
  }
}

// Returns the account balance.
export function balanceCheck(pin: number) {
    if (pin === USER_PIN) {
        console.log(`Your balance is ${BALANCE}`);
        return BALANCE;
    }
    else {
    console.log("Incorrect PIN");
    }
}

// Transfers money to another user's account and withdraws it from the account.
export function transfer(pin: number, amount: number, receiver: string) {
    if (pin === USER_PIN) {
        if (withdrawal(pin, amount)) {
            const transferAmount = withdrawal(pin, amount);
            console.log(`Success! ${transferAmount} was transferred to ${receiver}`);
            return balanceCheck(pin);
        }
        else {
            console.log("Insuffiencent Balance");
        }
    }
    else {
    console.log("Incorrect PIN"); 
    }
}

// AI transparency: AI was used to clean up this code.
