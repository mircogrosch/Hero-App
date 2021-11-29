export const logout = (history)=>{
    window.localStorage.removeItem("user");
    history.push("/")
}