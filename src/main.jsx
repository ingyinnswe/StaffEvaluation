import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import SignIn from './_auth/SignIn.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App/>
   {console.log('App rendered')}
  </React.StrictMode>,
)
