import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstcomponent from './Firstcomponent'
import BootstrapExample from './BootstrapExample'
import MaterialUIExample from './MaterialUIExample'
import StyleExample from './StyleExample'
import ModuleExample from './ModuleExample'
import Crud from './Crud'
import UserCrud from './UserCrud'
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <h4>My FIrst component</h4>
      {/* <Firstcomponent /> */}
      {/* <BootstrapExample /> */}
      {/* <MaterialUIExample /> */}
      {/* <StyleExample /> */}
      {/* <ModuleExample /> */}
      {/* <Crud /> */}
      <UserCrud />
    </>
  )
}

export default App
