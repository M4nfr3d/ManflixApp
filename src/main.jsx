import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginProvider } from './util/LoginProvider'
import { FooterComponent } from './components/FooterComponent'
import App from './App'
import './index.css'

 createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
      <App />
      <FooterComponent/>
    </LoginProvider>
  </StrictMode>,
)
