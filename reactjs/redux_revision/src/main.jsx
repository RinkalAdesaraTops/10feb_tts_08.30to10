import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import CounterStore from './CounterStore.jsx'
import UserStore from './Rtk/UserStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={UserStore}>
    <App />
    </Provider>
  </StrictMode>,
)
