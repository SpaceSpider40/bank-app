import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/login/loginPage'
import { PaymentsPage } from './pages/payments/paymentsPage'

import routing from "./routing.json";
import { DesktopPage } from './pages/desktop/desktopPage';

function App() {

  return (
    <Routes>
      <Route index path={routing.login} element={<LoginPage/>} />
      <Route path={routing.finaces} element={<PaymentsPage/>} />
      <Route path={routing.desktop} element={<DesktopPage/>} />
    </Routes>
  )
}

export default App
