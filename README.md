![A2uned Solutions](https://a2unedsolutions.com/icons/logos/a2uned_solutions_logo_small.svg)

# Our First Dapp

## Quick Start

### Install [Truffle](http://truffleframework.com/docs/getting_started/installation)
```
npm install -g truffle
```
#### After cloning or downloading the project
### Create your app and start a Ganache blockchain.
```

cd TO_PROJECT_DIRECTORY
npm install
npm run ganache
```

### Compile and deploy contracts, then launch the app.

In a separate shell

```
npm run migrate
npm start
```

This should launch a browser at URL `http://localhost:3000`. If it doesn't, try navigating there directly.

####Learn More
This project was bootstrapped with the Ethereum Starter App [Create React dApp](https://github.com/mjhm/create-react-dapp), which leverages the latest [Create React App](./REACT.md) and layers a template for creating Ethereum dApps using [TruffleFramework](http://truffleframework.com/docs/) and [Web3](https://github.com/ethereum/wiki/wiki/JavaScript-API)
