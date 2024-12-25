import './App.css'
import { FooterComponent } from './components'
import { MyRoutes } from './routers/routes'
import { LoginProvider } from './util/LoginProvider'
import './normalize.css'


function App() {

  return (<>
    <LoginProvider />
    <MyRoutes />
    <FooterComponent/>
  </>
  )
}

export default App
