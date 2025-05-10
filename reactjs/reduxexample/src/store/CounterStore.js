import React from 'react'
import { createStore } from 'redux'
import CounterReducer from '../reducers/CounterReducer'

const CounterStore = createStore(CounterReducer)

export default CounterStore
