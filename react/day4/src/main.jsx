import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import and wrap the ThemeProvider globally
import { ThemeProvider } from './context/ThemeContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    
  </StrictMode>,
)
