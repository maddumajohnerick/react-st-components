# react-st-components
styled components for react

 [![npm](https://img.shields.io/npm/v/react-st-components.svg)](https://www.npmjs.com/package/react-st-components) [![npm downloads](https://img.shields.io/npm/dt/react-st-components.svg?maxAge=2592000)](http://www.npmtrends.com/react-st-components) [![Maintenance Status](https://img.shields.io/badge/maintenance-active-green.svg)](https://github.com/maddumajohnerick/react-st-components) [![Code Climate](https://codeclimate.com/github/maddumajohnerick/react-st-components/badges/gpa.svg)](https://codeclimate.com/github/maddumajohnerick/react-st-components)

### Install
#### NPM
```js
$ npm install react-st-components --save
```

### Usage
```js
import ReactDOM from 'react-dom';
import { 
    GlobalStyle, //for the global styles
    STContainer 
} from 'react-st-components'; 

const App = () => {
    return (
        <>
            <GlobalStyle />
            <STContainer>
                {/* Rest of your code */}
            </STContainer>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('index'))
```

### Adding Theme
```js
import ReactDOM from 'react-dom';
import { STThemeProvider } from 'react-st-components'; //for theme provider

const App = () => {
    return (
        <>
            <STThemeProvider theme={theme}>
                {/* Rest of your code */}
            </STThemeProvider>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('index'))
```
The `theme` prop of the `<STThemeProvider />` must be an object with this structure:
```js
const theme = {
    tones: {
        primary: '';
        secondary: '';
        success: '';
        danger: '';
        warning: ''
    },
    flat: true
}
```
  - tones - [Object] containing the theme color palette(optional).
    - tones.<palette> - [String] `hex` color code(optional).
  - flat - [Boolean] if set to `true`, all `border-radius` of styled components is set to `0px`(optional, defaults to false).

See [Docs](https://maddumajohnerick.github.io/react-st-components/docs/) for more styled components.