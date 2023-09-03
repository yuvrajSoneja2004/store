
// Checks if the user is Authenticated
export const isAuthenticated = () => {
    let user_id = localStorage.getItem("user_id");

    return user_id === null ? false : true;
}