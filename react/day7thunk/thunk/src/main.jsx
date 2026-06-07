import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import store
import storeasync from './storeasync.js';
import{Provider} from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={storeasync}>
    <App />
  </Provider>
  </StrictMode>,
)
