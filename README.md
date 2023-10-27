# React Test Assignment

## Introduction
This application is a solution for displaying real-time price data in the user interface. Price data is available through a local service.

## Core Requirements
- The program should connect to a locally hosted service.
- The program should display real-time price changes for certain tickers.

## Bonus Features
I have implemented the following bonus features:

### Visual Effects
- In the case of negative price changes, the data field becomes red. In the case of positive price changes, the field becomes green.
- Icon display in the form of an arrow ( Material-UI is used) indicates the growth or decline of prices.

### Ticker Management
- Users have the ability to add and remove tickers from their favorite list.

## Technologies Used
- I used React with hooks.
- For state management, I utilized Redux with Redux-Thunk.
- To connect to the service, I employed Socket.io.
- For data visualization, I used Material-UI.
- For SEO optimization, I used React-Helmet.
## Running the Application
1. Start the local service by following the instructions in the "Starting the Local Service" section.
2. Launch your application with the command npm start or yarn start.


## Customization
To tailor the application to your specific needs, you can edit the code in the client and server directories.

## Links
- Link to the local service: http://localhost:4000
