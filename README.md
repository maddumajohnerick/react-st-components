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
import { GlobalStyle } from 'react-st-components'; //for the global style 

const App = () => {
    return (
        <>
            <GlobalStyle />
            {/* Rest of your code */}
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('index'))
```
On your index.html add 
```html
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet">
```

See [Docs](https://maddumajohnerick.github.io/react-st-components/docs/) for the styled components.