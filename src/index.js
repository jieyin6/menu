import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import reducers from './redux/reducer'

const store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension? window.devToolsExtension(): f=>f))


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
