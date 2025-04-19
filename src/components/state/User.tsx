import { useState } from "react"
type AuthUser = {
    name: string
    email: string
}
export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const handleLogin = () => {
        setUser({
            name: 'Birat',
            email: 'birat@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
       
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {user ? user.name : 'Logged Out'}</div>
            <div>User email is {user ? user.email : 'Logged Out'}</div>
        </div>
    )
}