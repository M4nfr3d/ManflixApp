import './App.css'
import { FooterComponent } from './components'
import { MyRoutes } from './routers/routes'
import { LoginProvider } from './util/LoginProvider'
import { LoginPage } from './pages'
import './normalize.css'


function App() {

  return (<>
    <LoginProvider />
    <MyRoutes />
    <LoginPage />
    <FooterComponent/>
  </>
  )
}

export default App
