import { useContext, createContext, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
})

const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return(
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export {AuthProvider, useAuth}