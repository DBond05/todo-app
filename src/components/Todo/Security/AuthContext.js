import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../API/TodoAPIService";
import { apiClient } from "../API/ApiClient";

//create a context
export const AuthContext = createContext()
//create hook to allow other components to use AuthContext
export const useAuth = () => useContext(AuthContext)

//Share the created context with other components
export default function AuthProvider({ children }) {
    //put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)



    //Hardcoded authentication
    // function login(username, password) {
    //     if (username === 'Demo' && password === 'password') {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    async function login(username, password) {
        const baToken = 'Basic ' + window.btoa(username + ":" + password)

        try {
            const response = await executeBasicAuthenticationService(baToken)
            if (response.status == 200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)
                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = baToken
                        return config
                    }
                )
                return true
            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }

    }
    function logout() {
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username, token }}>
            {children}
        </AuthContext.Provider>
    )
}
