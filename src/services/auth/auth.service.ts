export function login(email: string, password: string) {
    return new Promise((resolve, reject) => {
        console.log('login', email, password)
        if (password === 'err') reject(false)
        else if (password === 'wrong') resolve(false)
        else resolve(true)
    })
}

export function signup(name: string, password: string, email: string) {
    return new Promise((resolve, reject) => {
        console.log('signup', name, password, email)
        if (password === 'err') reject(false)
        else resolve(true)
    })
}