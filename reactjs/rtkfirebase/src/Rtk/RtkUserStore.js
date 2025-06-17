import { configureStore } from '@reduxjs/toolkit'
import RtkUserReducer from './RtkUserReducer'
const RtkUserStore = configureStore({
    reducer:{
        user:RtkUserReducer
    }
})

export default RtkUserStore
