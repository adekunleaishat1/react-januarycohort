import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import Home from './Home/Home.jsx'
import Input from './Input.jsx'
import Assignment from './Assignment.jsx'
import Revision from './Revision.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <App></App> */}
{/* <Input/> */}
 {/* <Home/> */}
 <Assignment />
 <Revision/>
     </StrictMode>,
)
