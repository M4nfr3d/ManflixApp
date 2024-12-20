import './App.css'
import { FooterComponent } from './components'
import { MyRoutes } from './routers/routes'
import { LoginProvider } from './util/LoginProvider'


function App() {

  return (<>
    <LoginProvider />
    <MyRoutes />
    <FooterComponent/>
  </>
  )
}

export default App
