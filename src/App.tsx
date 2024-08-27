import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/login/loginPage'

function App() {

  return (
    <Routes>
      <Route index path='/' element={<LoginPage/>} />
    </Routes>
  )
}

export default App
