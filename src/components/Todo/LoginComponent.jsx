import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from './Security/AuthContext';

export default function LoginComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUserNameChange(event) {
        setUsername(event.target.value)

    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)

    }

    async function handleSubmit() {
        if (await authContext.login(username, password)) {

            navigate(`/welcome/${username}`)
        } else {

            setShowErrorMessage(true)
        }
    }


    return (
        <div className="Login container">
            <h1>Please Login.</h1>
            <div className="card">
                {showErrorMessage && <div className="loginError text-danger"> Authentication failed</div>}
                <div className="LoginForm">
                    <div >
                        <label for="username" >User Name</label>
                        <input type="text" className="form-control"
                            name="username"
                            value={username}
                            onChange={handleUserNameChange} />

                    </div>
                    <div >
                        <label for="password">Password</label>
                        <input type="password" className='form-control'
                            name="password" value={password}
                            onChange={handlePasswordChange} />

                    </div>
                    <div>
                        <button className='btn btn-primary' type="button" name="login"
                            onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}