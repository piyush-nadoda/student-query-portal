const INITIAL_VALUE = {
    displayName: "",
    email: "",
    emailVerified: null,
    token: null
}

export const LoggedInUser = (data = INITIAL_VALUE, token) => {
    return({
    type: "LOGGED_IN_USER",
    payload: {
        name: data.displayName,
        email: data.email,
        emailVerified: data.emailVerified,
        token: token,
    }})
}

export const LoggedOutUser = () => {
    return({
    type: "LOGOUT",
    payload: null,})
}
