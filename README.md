## Assessment Smart Contract

This is a simple Solidity smart contract named "Assessment" that allows users to deposit and withdraw funds from their account. The contract is designed to manage a user's balance and includes an event to emit deposit and withdraw transactions.

### Contract Details

- SPDX-License-Identifier: UNLICENSED
- Solidity Version: 0.8.9

### Contract Overview

The "Assessment" contract has the following main features:

1. **Constructor**: The constructor initializes the contract and sets the initial balance with the value passed as `initBalance` in the constructor parameter. The `msg.sender` becomes the contract owner, and the contract balance is set to `initBalance`.

2. **Public State Variables**:
   - `owner`: An address payable variable that stores the address of the contract owner.
   - `balance`: A uint256 variable that represents the current balance of the contract.

3. **Events**:
   - `Deposit`: This event is emitted when a user deposits funds into the contract. It includes the `amount` of funds deposited.
   - `Withdraw`: This event is emitted when a user withdraws funds from the contract. It includes the `amount` of funds withdrawn.

4. **Functions**:
   - `getBalance()`: A public view function that returns the current balance of the contract.

   - `deposit(uint256 _amount)`: A public payable function that allows users to deposit funds into the contract. The `_amount` parameter specifies the amount of funds to deposit. The function increases the contract balance by the deposited amount and emits the `Deposit` event.

   - `withdraw(uint256 _withdrawAmount)`: A public function that allows users to withdraw funds from the contract. The `_withdrawAmount` parameter specifies the amount of funds to withdraw. If the user's account balance is sufficient for the withdrawal, the function reduces the contract balance by the withdrawal amount and emits the `Withdraw` event. If the user's account balance is insufficient, a custom error `InsufficientBalance` is reverted.

### Custom Error

The contract defines a custom error named `InsufficientBalance`, which is used in the `withdraw` function to revert the transaction if the user's account balance is less than the withdrawal amount.

### Important Notes

- This is a basic example of a smart contract and is not intended for production use without proper testing and security considerations.
- Ensure that appropriate security measures and access controls are implemented before deploying this contract on the Ethereum blockchain.

For more information on Solidity, please refer to the official Solidity documentation: https://docs.soliditylang.org/
