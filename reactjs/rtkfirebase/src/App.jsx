import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirebaseCrud from './FirebaseCrud'
import UserCrudRedux from './UserCrudRedux'
import RtkUserCrud from './RtkUserCrud'

function App() {
  return (
    <>
      {/* <h3>Firebase Example</h3>
      <FirebaseCrud /> */}
      {/* <UserCrudRedux /> */}
      <RtkUserCrud />
    </>
  )
}

export default App
