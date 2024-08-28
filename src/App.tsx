import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/login/loginPage'
import { DesktopPage } from './pages/desktop/desktopPage'

function App() {

  return (
    <Routes>
      <Route index path='/login' element={<LoginPage/>} />
      <Route path='/' element={<DesktopPage/>} />
    </Routes>
  )
}

export default App
