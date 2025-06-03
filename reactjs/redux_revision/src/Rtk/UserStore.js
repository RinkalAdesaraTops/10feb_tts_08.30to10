import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserReducer'
const UserStore = configureStore({
    reducer:{
        user:UserReducer
    }
})

export default UserStore
