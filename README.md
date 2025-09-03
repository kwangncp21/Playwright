# 🧪 Playwright Test Automation – Juice Shop

## 📌 Overview
This project demonstrates automated testing of the [OWASP Juice Shop](https://juice-shop.herokuapp.com) web application using **Playwright**.  
It follows the **Page Object Model (POM)** design pattern to keep locators and actions reusable and maintainable.

The main functionalities covered:
- Login with valid credentials  
- Add item to cart and proceed to checkout  
- Add a new address during checkout  
- Search for items in the shop  

---

## 📂 Project Structure
src/
└── tests/
├── login.spec.js # Test cases
└── pages/
└── login.page.js # Page Object for LoginPage

---

## ⚙️ Setup Instructions

### 1. Install dependencies
```bash
npm init -y
npm install --save-dev @playwright/test

🚀 Quickstart
1. Clone repository & install dependencies
git clone <your-repo-url>
cd <your-repo>
npm install

2. Run all tests
npx playwright test

3. Run tests in headed mode
npx playwright test --headed

4. Run specific test
npx playwright test src/tests/login.spec.js --grep "SearchItem"

🧑‍💻 Page Object – LoginPage
The LoginPage class encapsulates actions and locators for the Juice Shop application:
goto() → Navigate to baseUrl
fillLoginForm(username, password) → Log in with credentials
addToCart() → Add Apple Juice to cart and go to checkout
addNewAddress(Country, Name, MobileNumber, ZIPCode, Address, City) → Add shipping address
SearchItem(Fruit) → Search for an item by keyword
