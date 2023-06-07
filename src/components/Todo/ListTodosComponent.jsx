import { useEffect, useState } from "react";
import { retrieveAllTodosForUsernameApi, deleteTodoApi } from "./API/TodoAPIService";
import { useAuth } from "./Security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate()
    useEffect(() => refreshTodos(), [])


    function refreshTodos() {
        retrieveAllTodosForUsernameApi(username)
            .then(response => setTodos(response.data))
            .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        deleteTodoApi(username, id)
            .then(
                () => {
                    setMessage(` Todo #${id} has been completed and removed.`)
                    refreshTodos()
                }
            )
            .catch(error => console.log(error))
        console.log("clicked" + id)
    }

    function updateTodo(id) {
        console.log("clicked " + id)
        navigate(`/todo/${id}`)
    }
    function addNewTodo() {
        navigate(`/todo/0`)
    }

    return (
        <div className="container">
            <h1> TODOS </h1>

            {message && <div className="alert alert-success"> {message} </div>}

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Todo#</th>
                            <th>Description</th>

                            <th>Target Date</th>
                            <th>Is Done?</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-secondary"
                                            onClick={() => deleteTodo(todo.id)}>Done</button></td>
                                        <td><button className="btn btn-info"
                                            onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        }

                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-3" onClick={addNewTodo}> Add New Todo</div>
        </div>
    )
}