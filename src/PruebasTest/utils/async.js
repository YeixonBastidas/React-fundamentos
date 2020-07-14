
export const getDataCallback = (callback) =>{

    // solicitud http a un API
    const name = 'Yeixon Bastidas'

    setTimeout(() => {
        callback(name)
    }, 300)
    
}

export const getDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Yeixon Bastidas')
        }, 300)
    })
}

export const getDataPromiseError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error')
        }, 300)
    })
}

export const getUsers = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/users/1')
                    .then(response => response.json())                    
    
                    
}   
