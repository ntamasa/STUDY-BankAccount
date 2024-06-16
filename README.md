# Imaginary Bank Account

This project is a React application created **for studying purposes**, based on Jonas Schmedtmann's React course (Section 20). The main goal is to learn and practice React and the Redux library by implementing an imaginary bank account system.

## Table of Contents

- [Imaginary Bank Account](#imaginary-bank-account)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
    - [User Flow](#user-flow)
  - [Future Updates](#future-updates)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)

## Project Overview

This project allows users to create an account, manage their imaginary bank account by depositing, withdrawing money, requesting loans, and updating their account information. All amounts are managed and displayed in USD, regardless of the currency used for deposits.

## Features

- **User Creation**: Create a user by adding a name and an account ID.
- **Deposits and Withdrawals**: Deposit money in USD, GBP, or EUR, automatically converted to USD. Withdraw money from the account.
- **Loan Requests**: Request a loan by specifying the amount and purpose.
- **Account Management**: Update the user's name.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **JavaScript**: The programming language used for the project.
- **HTML**: For structuring the web pages.
- **CSS**: For styling the web pages.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ntamasa//STUDY-BankAccount.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd STUDY-BankAccount
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

## Usage

Once the development server is running, open your web browser and navigate to `http://localhost:8000` to view the application.

### User Flow

1. **Create an Account**: Enter your name and account ID.
2. **Manage Account**: You will be redirected to your imaginary bank account page where you can:
   - **Deposit Money**: Choose a currency (USD, GBP, EUR) and enter an amount.
   - **Withdraw Money**: Enter an amount to withdraw.
   - **Request a Loan**: Specify the loan amount and purpose.
   - **Change Name**: Update your account name.

## Future Updates

There may be updates and new features added to this project in the future as I continue to learn and apply new concepts. Stay tuned for more enhancements!

## Acknowledgements

This project is based on the teachings of Jonas Schmedtmann in his [React course](https://www.udemy.com/course/the-ultimate-react-course).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
