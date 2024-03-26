const doLogin = (data) =>{
    localStorage.setItem('user',data)
}

const doLogout = () =>{
    localStorage.removeItem('user')
}

const getToken = () =>{
    return localStorage.getItem('token')
}

const setToken = (data) =>{
    localStorage.setItem('token',data)
}

export {doLogin, doLogout, setToken, getToken}