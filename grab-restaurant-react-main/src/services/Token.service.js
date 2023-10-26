const getLocalRefreshToken = () =>{
    const user = json.parse(localStorage.getItem("user"));
    return user?.getLocalRefreshToken;
}

    const getLocalAccessToken = ()=> {
        const user = json.parse(localStorage.getItem("user"));
        return user?.accessToken;
    }

    const setLocalAccessToken = (token) => {
        const user = json.parse(localStorage.getItem("user"));
        user.accessToken = token;
        localStorage.setItem("user", Json.stringify(user));

    };

    const getUser = () => {
        return json.parse(localStorage.getItem("user"));
    };
    const setUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user))
    };
    const removeUser = () => {
        lacalStorage.removeItem("user")
    };
    const TokemService = {
        getLocalRefreshToken,
        getLocalAccessToken,
        setLocalAccessToken,
        getUser,
        setUser,
        removeUser,
    }
    export default TokenService;