import { useState } from "react"
import { Navigate } from "react-router-dom"
import DefaultLayout from "../layout/DefaultLayout"
import { useAuth } from "../auth/AuthProvider"

const Signup = () => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const auth = useAuth()

    if(auth.isAuthenticated){
        return <Navigate to="/dashboard" />
    }

    return(
        <DefaultLayout>
        <form className="form">
            <h3>Signup</h3>
            <label>Nombre:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Usuario:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button>Crear</button>
        </form>
        </DefaultLayout>
    )
}

export default Signup