import { useContext } from "react";
import { UserContext } from "./UserContext";
export const User = () => {
    const userContext = useContext(UserContext)
    if(!userContext) return <div>Loading...</div>
    const handleLogin = () => {
        if(userContext){
            userContext.setUser({
                name: 'Birat Roka',
                email: 'birat@gmail.com'
            })
        }
    }
    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick = {handleLogin}>Login</button>
            <button onClick = {handleLogout}>Logout</button>
            <div>
                <div>Username: {userContext.user?.name}</div>
                <div>Email:  {userContext.user?.email}</div>
            </div>
            
        </div>
    )
}