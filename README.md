# React Test Assignment

## Introduction
This application is a solution for displaying real-time price data in the user interface. Price data is available through a local service.

## Core Requirements
- The program connects to a locally hosted service to fetch real-time price data.
- The program display real-time price changes for specific tickers.

## Bonus Features
I have implemented the following bonus features:

### Visual Effects
- Negatice price chages are indicated by red highlighting, while positive changes are shown in green.
- Price trend direction is represented by arrow icins(Material-UI) for easy visualization.

### Ticker Management
- Users have the ability to add and remove tickers from their favorite list.

## Technologies Used
- React with hooks.
- Redux with Redux-Thunk for state management.
- Socket.io for connecting to the ral-time data setvice.
- Material-UI for data visualization.
- React-Helmet for SEO optimization.
- 
## Running the Application
1. Start the local service by following the instructions in the "Starting the Local Service" section.
2. Launch your application with the command npm start or yarn start.

## Customization
To tailor the application to your specific needs, you can edit the code in the client and server directories.

## Links
- Link to the local service: http://localhost:4000

## Running the local service
1. Open a new terminal
2. ```bash cd server```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```
5. Verify that the service is wirking correctly by visiting [http://localhost:4000](http://localhost:4000) to inspect the produced data.

## Running the application
1. Open a new terminal
2. ```cd client```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```


# Price Service Usage
URL:
```http://localhost:4000```

Price tickers are real-time via web-sockets.