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

See [Docs](https://maddumajohnerick.github.io/react-st-components/docs/) for more styled components.