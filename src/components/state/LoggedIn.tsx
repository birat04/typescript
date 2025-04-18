import { useState } from "react"
export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
        console.log('Logged In')
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
        console.log('Logged Out')
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'Logged In' : 'Logged'}</div>
        </div>
    )
}