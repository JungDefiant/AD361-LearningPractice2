# Issue Log

## Issue 1

- **Location:** Line 7
- **Issue:** Unused variable USER 
- **Explanation:** The variable named USER is not used.
- **Suggested Fix:** Remove the line completely or identify if there is another variable being used where USER would be used. Double-check if there is 'original thinking' where implementation is started, but not finished. Otherwise, remove the line.
- **Status:** Ongoing


## Issue 2

- **Location:** Line 7
- **Issue:** The way that the string is written doesn't make sense.
- **Explanation:** The last name is Thecat, when normally this is written as "the cat".
- **Suggested Fix:** Separate the second word in the string or drop the line.
- **Status:** Ongoing

## Issue 3

- **Location:** Line 12
- **Issue:** balance should be called amount, not balance
- **Explanation:** The parameter represents the amount that is deposited, not the balance. This affects readability and makes the code confusing to read since both BALANCE and the parameter balance are named the same.
- **Suggested Fix:** Rename the balance parameter to amount.
- **Status:** Ongoing


## Issue 4

- **Location:** Line 14
- **Issue:** balance is being re-assigned to BALANCE and itself
- **Explanation:** Parameters should not typically be reassigned unless the parameter is a object and the purpose of the function is to be a mutator. This function is designed to accept an input and return a new output.
- **Suggested Fix:** Change balance to a new variable "let deposit", which equals BALANCE + balance. Return deposit.
- **Status:** Ongoing


## Issue 5

- **Location:** Line 14
- **Issue:** Number and array are being added togatehr.
- **Explanation:** On line 8, BALANCE is an array, but the parameter balance is a number. These can't be added together directly.
- **Suggested Fix:** Verify that BALANCE needs to be a number. Likely change BALANCE to a number (likely 15,983).
- **Status:** Ongoing


## Issue 6

- **Location:** Line 23 & 41
- **Issue:** The name of the function is mispelled.
- **Explanation:** The name of the withdrawl is mispelled. This can affect the readability of the code.
- **Suggested Fix:** Change the name of the function to withdrawal.
- **Status:** Ongoing


## Issue 7

- **Location:** Line 23
- **Issue:** The amount parameter is unused.
- **Explanation:** Lines 25 through 27 are identical to lines 14 to 16. There is no balance parameter, but it is being used on Line 25.
- **Suggested Fix:** Replace balance with amount.
- **Status:** Ongoing


## Issue 8

- **Location:** Line 8
- **Issue:** BALANCE is a const type.
- **Explanation:** BALANCE is suppposed to be mutated in deposit() and withdrawal(), then checked with balanceCheck(). However, BALANCE is a const and cannot be modified. 
- **Suggested Fix:** Change BALANCE to a let and modify BALANCE directly in deposit() and withdrawal().
- **Status:** Ongoing


## Issue 9

- **Location:** Line 25
- **Issue:** The variable is BALANCE + balance and it should have a check for whether it's negative.
- **Explanation:** On line 25, the variable should equal BALANCE - amount, not BALANCE + balance. Furthermore, since the BALANCE can never be reduced below 0, then there has to be a check that BALANCE never goes below 0.
- **Suggested Fix:** Change the variable to equal BALANCE - amount and create an if condition to check if the returned value is negative.
- **Status:** Ongoing


## Issue 10

- **Location:** Lines 35 & 41
- **Issue:** Needs a PIN check for transfer() and balanceCheck().
- **Explanation:** Both functions need a PIN check to execute, according to program requirements.
- **Suggested Fix:** Add an if-else condition that checks whether the PIN is valid or not. Add a pin parameter to balanceCheck().
- **Status:** Ongoing


## Issue 11

- **Location:** Line 40
- **Issue:** transfer() does not have a negative value check.
- **Explanation:** There is no check to see if the BALANCE will fall below 0 in transfer().
- **Suggested Fix:** Add an if-else condition that checks whether the transfer would cause BALANCE to fall below 0.
- **Status:** Ongoing


## Issue 12

- **Location:** Line 40, 42
- **Issue:** Third parameter reciver is mispelled.
- **Explanation:** The parameter reciver is mispelled, which affects the readability of the code.
- **Suggested Fix:** Rename reciver to receiver.
- **Status:** Ongoing


## Issue 13

- **Location:** Line 43
- **Issue:** balanceCheck() is not being invoked.
- **Explanation:** The return is written as balanceCheck, which returns the balanceCheck function. Instead, return balanceCheck().
- **Suggested Fix:** Call balanceCheck() as the return for transfer().
- **Status:** Ongoing


## Issue 14

- **Location:** Line 42
- **Issue:** transferAmount is unused.
- **Explanation:** The transferAmount variable is unused in transfer().
- **Suggested Fix:** Add a console.log() that says "${transferAmount} was sent to ${receiver}". 
- **Status:** Ongoing


## Issue 15

- **Location:** Line 36
- **Issue:** console.log() is after return statement
- **Explanation:** The console.log() is after the return statement, so it never gets called.
- **Suggested Fix:** Move console.log() before the return statement.
- **Status:** Ongoing
