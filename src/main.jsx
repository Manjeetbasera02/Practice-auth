import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Contextprovider } from './components/Contextapi/Contextapi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contextprovider>
    <App />
    </Contextprovider>
    
  </React.StrictMode>,
)
