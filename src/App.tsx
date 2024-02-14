import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SignIn from './pages/signIn/SignIn'
import SignUp from './pages/signUp/SignUp'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SignIn />} path="/signin" />
        <Route element={<SignUp />} path="/signup" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
