import { useState } from "react"
type AuthUser = {
    name: string
    email: string
}
export const User = () => {
    const [user, setUser] = useState<AuthUser | null>({} as AuthUser)
    
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
            <div>User is { user?.name }</div>
            <div>User email is { user?.email }</div>
        </div>
    )
}