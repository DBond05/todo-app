import { apiClient } from "./ApiClient"

export const retrieveHelloWorld = () => apiClient.get('/hello-world')


export const retrieveHelloBean = () => apiClient.get('/hello-world-bean')

export const retrieveHelloWorldVariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`)