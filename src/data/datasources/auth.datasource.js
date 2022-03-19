import { HttpClient } from ".";

export function login(email, password) {
    console.log(email, password)
    return HttpClient.post("/api/auth/login", {
        email: email,
        password: password
    })
}

export function register(email, password, firstName, lastName) {
    return HttpClient.post("/api/auth/register", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
}