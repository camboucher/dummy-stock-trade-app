# ModernFi Take Home

This project was bootstrapped with [Vite](https://vitejs.dev/), a fast React development environment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have an up to date LTS version of Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).
- Yarn or npm for package management

## Getting Started

To get a local copy up and running, follow these simple steps.

1. Clone the repository:

   git clone https://github.com/your-username/your-app.git

2. Install dependencies by running either

   - For npm:
     ```
     rm -rf yarn.lock
     npm install
     ```

   - For yarn:
     ```
     yarn
     ```

3. Start the application:

   - For npm:
     ``
     npm run vite
     ```

   - For yarn:
     ```
     yarn vite

## Usage

The application does not contain any data on startup and relies upon communication with an external API endpoint that will populate based on user trade submissions. The trade form has minimal validation for inputs, but invalid submissions will be rejected by the endpoint. Invalid trades will populate the historical trade table but not the ticker cards. 

To populate with mocked ticker cards or trade data on app startup, populate the useState fields in the useTradeHistoryData hook with the data generated in the mockData.ts file


