import UserContextProvider from "./contexts/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"
function App() {
  

  return (
    <>
    <UserContextProvider>
      <h1>"Context API"</h1>
      <Profile/>
      <Login/>
      
    </UserContextProvider>
    
    </>
  )
}

export default App
