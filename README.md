# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

-------------------------------------------------------------------------------

Project description:
For now, the project has two features,
list page: `/list`
detail page: `/detail/${assetContractAddress}/${tokenId}`

There are some notes to start the project:
1. The entry point of the app is `src/index.js`
2. The routing path config is `src/routes-configs.js`
3. Please place the global utilites and variable in `src/utils/**`
4. All the featues is divided by routing which is in the `src/routes/**`, you can also reference to `src/routes-configs.js`
5. if you need to implement shared components, place place it in `src/common-components/**`

