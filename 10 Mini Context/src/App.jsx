import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/02 UserContextProvider'


function App() {

  return (
    <>
      <UserContextProvider>
        <h1>react</h1> <br />
        <Login /> <br />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
