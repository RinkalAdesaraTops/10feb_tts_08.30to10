import './App.css'
import Apicomponent from './Apicomponent'
import ApiCrud from './ApiCrud'
import CustomHook from './CustomHook'
import Customhookrevision from './Customhookrevision'
import { lazy, Suspense } from 'react'
const Home = lazy(()=>import('./Home'))
const Contact = lazy(()=>import('./Contact'))
// import Home from './Home'
// import Contact from './Contact'
function App() {
  return (
    <>
      {/* <Apicomponent /> */}
      {/* <ApiCrud/> */}
      {/* <CustomHook /> */}
     {/* <Customhookrevision/> */}
     <Suspense fallback={<div>PLzz wait Contact loading...</div>}>
        <Contact />
     </Suspense>
     <Suspense fallback={<h3>Home component coming...</h3>}>
        <Home />
     </Suspense>
     
    </>
  )
}
export default App
