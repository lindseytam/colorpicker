# Shapely Color Picker 

This package makes it easy for users to set the shape, default color, and height of a color picker application for their react app. This colorpicker is designed to handle changes immediately. You can check out a live demo [here](http://lindseytam.com/colorpicker/).

![](https://github.com/lindseytam/colorpicker/blob/main/images/demo.gif)


# 🎨 Customization Options

## Shapes

So far, users can choose between 3 different shapes: a circle, a square, and a hexagon. 

## Height

Height is calcualated in px and is inserted as an integer. At the moment, you can specify height but not width. Therefore, you cannot make the circle and oval nor can you make the square a rectangle.

## Default Color

You may specify the default color to set your colorpicker to. This value must be a hex. Non-hex values or string like 'red' will render the default value to be black.

# 🛠️ Installation & Usage

This package is available on npm and can be installed with the following command:

`npm i shapely-colorpicker`

After installation, you can add it to your app with one of the following:

`var Colorpicker = require('shapely-colorpicker');`

`import Colorpicker from 'shapely-colorpicker';`

# ⚙️ Development 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Run `npm t -- --coverage --watchAll=false` to run tests with coverage.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run pre-deploy`

Build files to prepare for deployment

### `npm run deploy`

Deploy sample to Github pages



See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
