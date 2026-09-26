import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx' 
// import App2 from './App2.jsx'
// import AppListRendering from "./AppListRendering"
// import UseStateApp from "./UseStateApp.jsx"
import ApiCallingApp from './apiCallingApp.jsx'
// import 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />    */}
    {/* <App2></App2>  */}
    {/* <AppListRendering />
     */}
     {/* <UseStateApp /> */}
     <ApiCallingApp/>
    {/* use / access */}
  </StrictMode>,
)


// react op-cl tags 
// self-closig tag 
// comp

// import pandas as pd 
// from abc import login 
