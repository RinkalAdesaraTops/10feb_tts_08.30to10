import './App.css'
import Apicomponent from './Apicomponent'
import ApiCrud from './ApiCrud'
import CustomHook from './CustomHook'
import Customhookrevision from './Customhookrevision'
import { lazy, Suspense } from 'react'
import Menu from './Menu'
import { BrowserRouter, Routes,Route } from 'react-router'
const Home = lazy(()=>import('./Home'))
const Contact = lazy(()=>import('./Contact'))

// import Home from './Home'
import Contact1 from './Contact1'
import Contact2 from './Contact2'
function App() {
  return (
    <>
      {/* <Apicomponent /> */}
      {/* <ApiCrud/> */}
      {/* <CustomHook /> */}
     {/* <Customhookrevision/> */}
     {/* <Suspense fallback={<div>PLzz wait Contact loading...</div>}>
        <Contact />
     </Suspense>
     <Suspense fallback={<h3>Home component coming...</h3>}>
        <Home />
     </Suspense>    */}
     <Menu />
     {/* <BrowserRouter> */}
     <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/contact" element={<Contact />} >
          <Route path='c1' element={<Contact1 />} />
          <Route path='c2' element={<Contact2 />} />
        </Route>
        {/* <Route path="/contact" element={<Contact />}/> */}
        <Route path="/crud" element={<ApiCrud />}/>
     </Routes>
     {/* </BrowserRouter> */}
    </>
  )
}
export default App
