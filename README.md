# Assessment Smart Contract

This repository contains a Solidity smart contract named "Assessment" that allows users to deposit and withdraw Ether. The contract is designed to manage a user's balance and provides basic functionality for financial transactions on the Ethereum blockchain.

## Contract Details

- **SPDX-License-Identifier**: UNLICENSED
- **Solidity Version**: ^0.8.9

### Contract Functions

1. `getBalance()`: Returns the current balance of the contract.
2. `deposit(uint256 _amount)`: Allows users to deposit Ether into the contract.
3. `withdraw(uint256 _withdrawAmount)`: Allows users to withdraw Ether from the contract, handling insufficient balance with a custom error.

### Events

- `Deposit(uint256 amount)`: Emitted when Ether is deposited into the contract.
- `Withdraw(uint256 amount)`: Emitted when Ether is withdrawn from the contract.

## Getting Started

Follow these steps to set up and run the project on your local machine:

1. Clone this GitHub repository to your computer.
2. Navigate to the project directory in your terminal.
3. Run the following command to install project dependencies:
   ```sh
   npm install
   ```
4. Open two additional terminals within your code editor.

5. In the second terminal, start a local Ethereum development node using Hardhat:
   ```sh
   npx hardhat node
   ```

6. In the third terminal, deploy the smart contract to the local network:
   ```sh
   npx hardhat run --network localhost scripts/deploy.js
   ```

7. Back in the first terminal, start the front-end development server:
   ```sh
   npm run dev
   ```

8. Open your web browser and navigate to http://localhost:3000/ to interact with the front-end interface.

## Project Structure

- `contracts/Assessment.sol`: The Solidity smart contract code.
- `scripts/deploy.js`: Script to deploy the smart contract.
- `frontend/`: Contains the React front-end code.
- `hardhat.config.js`: Hardhat configuration file.

## License

This code is provided under an UNLICENSED license, which means that there are no restrictions on its use, modification, or distribution.

**Note**: This project is intended for educational purposes and is not suitable for production use without additional considerations and security measures.

Feel free to explore, experiment, and learn from this code!
```

Please make sure to adjust the instructions and details according to your specific project setup and requirements.
