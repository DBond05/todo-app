import { Link } from "react-router-dom"
import { useState } from 'react'
import { useAuth } from "./Security/AuthContext"
//import { retrieveHelloBean, retrieveHelloWorld, retrieveHelloWorldVariable } from "./API/HelloWorld"


export default function WelcomeComponent() {
    const authContext = useAuth()
    const username = authContext.username
    //const { username } = useParams()
    const [message] = useState(null)

    // function callHelloWorld() {
    //     console.log('called')
    //     //axios
    //     retrieveHelloWorld()
    //         .then((response) => successResponse(response.data))
    //         .catch((error) => errorResponse(error))
    //         .finally(() => console.log('CleanUp'))

    // }
    // function callHelloBean() {
    //     console.log('bean called')
    //     //axios
    //     retrieveHelloBean()
    //         .then((response) => successResponse(response.data.message))
    //         .catch((error) => errorResponse(error))
    //         .finally(() => console.log('CleanUp'))

    // }
    // function callHelloWorldVariable() {
    //     console.log('path variable called')
    //     retrieveHelloWorldVariable('Demo')
    //         .then((response) => successResponse(response.data.message))
    //         .catch((error) => errorResponse(error))
    //         .finally(() => console.log('CleanUp'))
    // }

    // function successResponse(response) {
    //     console.log(response)
    //     setMessage(response)
    // }
    // function errorResponse(error) {
    //     console.log(error)
    // }
    return (
        <div className="WelcomeComponent">
            <h1> Welcome {username}</h1>
            <div className="container">
                <div className="row">
                    <div className="col-3 navbar navbar-expand-sm">
                        <Link className="btn btn-secondary" to="/todos"> Manage Todos</Link>
                    </div>
                    <div className="text-info col-9">
                        {message}
                    </div>

                </div>
            </div>
        </div>

    )
}