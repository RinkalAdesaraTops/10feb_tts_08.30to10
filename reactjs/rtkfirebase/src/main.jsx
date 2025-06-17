import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import UserStore from './redux/UserStore.js'
import RtkUserStore from './Rtk/RtkUserStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={RtkUserStore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
