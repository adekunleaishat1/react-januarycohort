import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import Home from './Home/Home.jsx'
import Input from './Input.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <App></App> */}
<Input/>
 {/* <Home/> */}
     </StrictMode>,
)
