# Weather Check Project

This project is a Cypress-based end-to-end testing suite for verifying weather forecasts on the Sinoptik.ua website.

## Project Structure

- `cypress/fixtures/weather_data.json`: Contains test data such as city name, number of forecast days, and expected date formatting.
- `cypress/e2e/check_weather_for_7_and_10_days_test.cy.js`: Contains test cases for verifying weather forecasts over 7 and 10 days.
- `cypress.config.js`: Cypress configuration file that sets viewport properties.

## Prerequisites

- Node\.js
- npm

## Installation

1\. Clone the repository:
```sh
git clone https://github.com/pokotiX/cypressTest
```

2\. Navigate to the project directory:
```sh
cd cypressTest
```

3. Install the dependencies:
```sh
npm install
```

Running Tests
To run the Cypress tests interactively, execute:
```sh
npx cypress open
```

To run tests in headless mode, execute:
```sh
npx cypress run
```

## Test Cases
* **Open Main Page and Search City**: Verifies that the main page opens and correctly handles the city search.
* **Check Weather for 7 Days**: Verifies the weather forecast for the next 7 days.
* **Check Weather for 10 Days**: Verifies the weather forecast for the next 10 days.

## Test Data
The test data is stored in the `cypress/fixtures/weather_data.json` file. The data includes the city name, the number of forecast days, and the expected date format.

* City used in tests.
* Number of days for 7-day and 10-day forecasts.
* Date formatting settings and localized month names used to verify weather dates.
