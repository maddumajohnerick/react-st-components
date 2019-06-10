# react-st-components
styled components for react

### Install
#### NPM
```js
$ npm install react-st-components --save
```

### Usage
```js
import ReactDOM from 'react-dom';
import { GlobalStyle, STContainer } from 'react-st-components'; //for the global style 

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
    }
}
```
  - tones - [Object] containing the theme color palette(optional).
    - tones.<palette> - [String] hex color code(optional).

See [Docs](https://maddumajohnerick.github.io/react-st-components/docs/) for more styled components.