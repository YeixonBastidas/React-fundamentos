import { getDataCallback, getDataPromise, getDataPromiseError, getUsers } from './async'

describe('Hacinedo test a poeraciones asincronas', () => {
    // done => significa que es un test async
    test('Haciendo test a Callback', (done)=>{

        getDataCallback((name)=>{
           expect(name).toBe('Yeixon Bastidas')
           done()
        })
        
    })

    test('Haciendo test a Promesa', (done)=>{

        getDataPromise()
        .then((name) => {
            expect(name).toBe('Yeixon Bastidas')
            done()
        })
        .catch((error) => {
            expect(error).toBe('Yeixon Bastidas')
            done()
        })
        
    })

    test('Haciendo test a Promesa rechazada', (done)=>{

        getDataPromiseError()
        .catch((error) => {
            expect(error).toBe('error')
            done()
        })
        
    })

    test('Haciendo test a Promesa con expect', ()=>{
        return expect(getDataPromise()).resolves.toBe('Yeixon Bastidas')    
    })

    test('Haciendo test a promesa con Async/Await', async()=>{

        const name = await getDataPromise();
        expect(name).toBe('Yeixon Bastidas')
        
    })

    test('Haciendo test a promesa con Async/Await rechazada', async()=>{
        try {
            const name = await getDataPromiseError();
            expect(name).toBe('Yeixon Bastidas')
        } catch (error) {
            expect(error).toBe('error')
        }
        
    })

    test('Probando promesa con solicitud HTTP', async()=>{
        
        const user = await getUsers();
        expect(user).toHaveProperty('username')        
        
    })

   


})