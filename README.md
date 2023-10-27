# React Test Assignment

## Introduction
This application is a solution for displaying real-time price data in the user interface. Price data is available through a local service.

## Core Requirements
- The program should connect to a locally hosted service.
- The program should display real-time price changes for certain tickers.

## Bonus Features
We have implemented the following bonus features:

### Visual Effects
- In the case of negative price changes, the data field changes to red. In the case of positive price changes, the field changes to green.
- Display of an icon using Material-UI in the form of an arrow indicating price growth or decline.

### Ticker Management
- Users have the ability to add and remove tickers from their favorite list.

## Technologies Used
- We used React with hooks.
- For state management, we utilized Redux with Redux-Thunk.
- To connect to the service, we employed Socket.io.
- For data visualization, we used Material-UI.
- For SEO optimization, we used React-Helmet.
## Running the Application
1. Start the local service by following the instructions in the "Starting the Local Service" section.
2. Launch your application with the command npm start or yarn start.


## Customization
To tailor the application to your specific needs, you can edit the code in the client and server directories.

## Links
- Link to the local service: http://localhost:4000
