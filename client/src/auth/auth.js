const doLogin = (data) =>{
    localStorage.setItem('user',data)
}

const doLogout = () =>{
    localStorage.removeItem('user')
}

export {doLogin, doLogout}