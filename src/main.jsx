import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './components/vscodesidebar/vscodeside.css'
// import "./components/EmiCalculator/Emicalculator.css";
// import "./components/darkmodeLightmode/darkModeLightMode.css"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
