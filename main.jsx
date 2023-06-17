import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import Profile from './components/Profile.jsx'
import Landing from './components/Landing.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-qi4p5awvo1cg72zz.us.auth0.com"
    clientId="Xj18QoXRJkE11wLsr9FKYd644lvLU4sS"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>
)
