import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import CounterStore from './RTK/CounterStore.js'
import UserStore from './reduxcrud/UserStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={CounterStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
