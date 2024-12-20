import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginProvider } from './util/LoginProvider'
import App from './App'
import './index.css'

 createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </StrictMode>,
)
