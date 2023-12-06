# ModernFi Take Home

This project was bootstrapped with [Vite](https://vitejs.dev/), a fast React development environment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have an up to date LTS version of Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).
- Yarn (recommended) or npm for package management

## Getting Started

To get a local copy up and running, follow these simple steps.

1. Clone the repository:

   git clone https://github.com/your-username/your-app.git

2. Install dependencies by running either
  
   - For yarn:
     ```
     yarn
     ```

   - For npm:
     ```
     rm -rf yarn.lock
     npm install
     ```

3. Start the application:

   - For npm:
     ```
     npm run vite
     ```

   - For yarn:
     ```
     yarn vite

## Usage

The application does not contain any data on startup and communicates with an external API endpoint to submit user trades. The trade form has minimal validation for inputs, but the endpoint will reject invalid trades. Invalid trades will populate the historical trade table but not the ticker cards. 

To populate with mocked ticker cards or trade data on app startup, populate the useState fields in the useTradeHistoryData hook with the data generated in the mockData.ts file


