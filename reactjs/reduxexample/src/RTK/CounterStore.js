import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import CounterReducer from './CounterReducer'

const CounterStore = configureStore({
    reducer:{
        Counter:CounterReducer
    }
})

export default CounterStore
