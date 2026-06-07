import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import react-redux provider
import { Provider } from 'react-redux'
//import store and pass it as prop
import store from './store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* now app can access the complete stor(data) */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
