import { HttpClient } from ".";

export function login(email: string, password: string) {
    console.log(email, password)
    return HttpClient.post("/api/auth/login", {
        email: email,
        password: password
    })
}

export function register(email: string, password: string, firstName: string, lastName: string) {
    return HttpClient.post("/api/auth/register", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
}